
interface ITkokens {
    refreshToken: string,
    idToken: string,
    expiresIn: number,
    localId: string

  }

const TOKEN_KEY ='jwt-token';
const REFRESH_KEY = 'jwt-refresh-token';
const EXPIRES_KEY = 'jwt-expires';
const USERID_KEY = 'user-local-id';

export  function setTokens({
    refreshToken,
    idToken,
    localId,
    expiresIn=3600}:ITkokens) {
    // localId, id registr user in firebase
    const expiresDate = new Date().getTime() + expiresIn*1000;

    localStorage.setItem(USERID_KEY, localId);
    localStorage.setItem(TOKEN_KEY, idToken);
    localStorage.setItem(REFRESH_KEY, refreshToken);
    localStorage.setItem(EXPIRES_KEY, String(expiresDate));

}

export function getAccessToken() {
    return localStorage.getItem(TOKEN_KEY)
}

export function getRefreshToken() {
    return localStorage.getItem(REFRESH_KEY)
}

export function getTokenExpiresDate() {
    return localStorage.getItem(EXPIRES_KEY)
}

export function getUserId() {
    return localStorage.getItem(USERID_KEY)
}

const localStorageService = {
    setTokens,
    getAccessToken,
    getRefreshToken,
    getTokenExpiresDate,
    getUserId
}

export default localStorageService;

