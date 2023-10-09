import Cookies from "js-cookie";
export async function isLogin() {
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
