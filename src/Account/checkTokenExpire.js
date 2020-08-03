import { decodeJwtToken } from "./decodeToken"
import { setRequestHeader } from "./setAxiosHeader";

export const chekTokenExpire = (token) => {
    const decodedToken = decodeJwtToken(token).payload;
    const exp = decodedToken.exp;
    const name = decodedToken.name;

    if((Date.now()/1000) > exp) {
        localStorage.removeItem("app-token");
        return;
    }

    setRequestHeader(token);
    return name;
}