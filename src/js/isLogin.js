import Cookies from "js-cookie";
export function isLogin() {
    const userInfo = Cookies.get("userInfo");
    if (userInfo) {
        return {
            isLogin: true,
            userInfo: JSON.parse(userInfo),
        };
    }
    return {
        isLogin: false,
        userInfo: null,
    };
}
