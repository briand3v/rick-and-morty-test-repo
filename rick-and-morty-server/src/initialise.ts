import { Container } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";
import { infrastructureContainerModule } from "./infrastructure/container";
import { Application as ExpressApplication } from "express";
import bodyParser from "body-parser";
import config from '@config/main';
import '@interfaces/http/controllers';
import { applicationModuleContainer } from "@application/container";
import { errorHandler } from "./interfaces/http/middlewares/ErrorHandler";


const initialise = async () => {
    const container = new Container();
    container.load(applicationModuleContainer);
    await container.loadAsync(infrastructureContainerModule);

    // Api server init
    const server = new InversifyExpressServer(container);

    server.setConfig((app: ExpressApplication) => {
        app.use(
            bodyParser.urlencoded({
                extended: true,
            }),
        );
        app.use(bodyParser.json());
    });

    server.setErrorConfig((app: ExpressApplication) => {
        app.use(errorHandler);
    });

    const apiServer = server.build();
    apiServer.listen(config.API_PORT, () => {
        console.log(`Rick and morty server initialised on the port ${config.API_PORT}`);
    });
    return container;
};

export { initialise };