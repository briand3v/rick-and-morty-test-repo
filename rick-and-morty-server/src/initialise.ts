import { Container } from "inversify";
import morgan from 'morgan';
import { InversifyExpressServer } from "inversify-express-utils";
import { infrastructureContainerModule } from "./infrastructure/container";
import { Application as ExpressApplication } from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import config from '@config/main';
import cors from 'cors';
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
        const corsOptions = {
            credentials: true,
            origin: 'http://localhost:3000',
        };
        app.use(cors(corsOptions));
        app.use(cookieParser());
        app.use(bodyParser.json());
        // init morgan
        morgan.token(
            'body',
            (req: any): string => `\nREQUEST BODY: ${JSON.stringify(req.body)}`,
        );
        app.use(
            morgan(
                ':method :url HTTP/:http-version :status :response-time ms :referrer :user-agent - :body',
            ),
        );
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