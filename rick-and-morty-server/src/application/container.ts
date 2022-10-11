import { TYPES } from "@constants/types";
import { ContainerModule, interfaces } from "inversify";
import { AuthApplication } from "./auth/AuthApplication";

export const applicationModuleContainer = new ContainerModule(
    (bind: interfaces.Bind) => {
        bind<AuthApplication>(TYPES.AuthApplication).to(AuthApplication);
    },
);

