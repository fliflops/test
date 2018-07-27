import Cookies from 'universal-cookie';
const cookie = new Cookies()

export const insertCookie = (users) => {
    return cookie.set('user',users,{path: '/'});
}

export const removeCookie = () => {
    return cookie.remove('user',{path:'/'})
} 

export const getCookie = () => {
    return cookie.get('user') || null
}