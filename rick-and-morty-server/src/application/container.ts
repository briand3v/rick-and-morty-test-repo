import { TYPES } from "@constants/types";
import { ContainerModule, interfaces } from "inversify";
import { AuthApplication } from "./auth/AuthApplication";
import { JWTAuthenticationHandler } from "./auth/JWTAuthenticationHandler";
import { JWTTokenUtil } from "./auth/JWTTokenUtil";

export const applicationModuleContainer = new ContainerModule(
    (bind: interfaces.Bind) => {
        bind<AuthApplication>(TYPES.AuthApplication).to(AuthApplication);
        bind<JWTAuthenticationHandler>(TYPES.AuthenticationHandler).to(JWTAuthenticationHandler);
        bind<JWTTokenUtil>(TYPES.JWTToken).to(JWTTokenUtil);
    },
);

