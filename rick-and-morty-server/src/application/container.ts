import { TYPES } from "@constants/types";
import { ContainerModule, interfaces } from "inversify";
import { DeserializeUserMiddleware } from "../interfaces/http/middlewares/deserializeUserMiddleware";
import { AuthApplication } from "./auth/AuthApplication";
import { JWTAuthenticationHandler } from "./auth/JWTAuthenticationHandler";
import { JWTTokenUtil } from "./auth/JWTTokenUtil";
import { CharacterApplication } from "./character/CharacterApplication";
import { UserApplication } from "./user/UserApplication";

export const applicationModuleContainer = new ContainerModule(
    (bind: interfaces.Bind) => {
        bind<AuthApplication>(TYPES.AuthApplication).to(AuthApplication);
        bind<JWTAuthenticationHandler>(TYPES.AuthenticationHandler).to(JWTAuthenticationHandler);
        bind<JWTTokenUtil>(TYPES.JWTToken).to(JWTTokenUtil);
        bind<CharacterApplication>(TYPES.CharacterApplication).to(CharacterApplication);
        bind<UserApplication>(TYPES.UserApplication).to(UserApplication);
        bind<DeserializeUserMiddleware>(DeserializeUserMiddleware).toSelf();
    },
);

