import { LoginToken } from "./login-token";

export interface CurrentUser{
    userName: string;
    sessionToken: LoginToken
}