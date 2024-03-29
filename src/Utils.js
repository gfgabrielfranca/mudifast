export const Cookie = {
    setCookie(name, value) {
        document.cookie = name + "=" + value + ";";
    },
    getCookie(name) {
        name = name + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var cookies = decodedCookie.split(';');
        for(var i = 0; i <cookies.length; i++) {
            var cookie = cookies[i];
            while (cookie.charAt(0) === ' ') {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(name) === 0) {
                return cookie.substring(name.length, cookie.length);
            }
        }
    
        return "";
    }
}