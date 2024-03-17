import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { createUsers} from './loadList';
import localStorageService, { setTokens } from './localStorage.service';
import { getService } from './getService';


export type FormSignUp = {
    email?: string
    password?: string
    userName?: string,
    // payload_id?: string
  }



export interface IDefaultValue {
    email?: string
    password?: string
    userName?: string,
  }

export const httpAuth = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/',
    params: {
        key: process.env.REACT_APP_FIREBASE_KEY
        // key: 'AIzaSyBo7_E3-xSwK9ATdoiXE4o9sfn3HSw7iUU'
    }
})
// console.log(process.env);


// for the value children, correct the typefrom any 
const AuthContext = createContext<FormSignUp | any>({});

export const useAuth = () => {
    return useContext(AuthContext)
}

// for the value children, correct the typefrom any 
const AuthProvider = ({children}:any) => {
    const [currentUser, setCurrentUser] =  useState({});
    const [error, setError] = useState(null);

    async function signUp ({email, password, ...rest}:FormSignUp) {
        try {
            const { data } = await httpAuth.post(
                'accounts:signUp',
                {
                    email,
                    password,
                    returnSecureToken:true
                })
            setTokens(data);
            await createUser({_id: data.localId, email, ...rest})
            console.log(data);
            
        } catch (error) {
            console.log(error);
            
        }
    }

    async function signIn ({email, password}:FormSignUp) {
        // const key = 'AIzaSyBo7_E3-xSwK9ATdoiXE4o9sfn3HSw7iUU';
        // const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`;
        try {
            const { data } = await httpAuth.post(
                'accounts:signInWithPassword',
                {
                    email,
                    password,
                    returnSecureToken:true
                })
            setTokens(data);
            getUserData()
        } catch (error) {
            console.log(error);
        }
    }


    async function createUser (content: unknown) {
        try {
            const { data } = await createUsers(content)
            setCurrentUser(data);
        } catch (error) {
            console.log(error);
        }
        
    }

    function loginOut() {
        localStorageService.removeAuthData();
        setCurrentUser({});
    } 

    // eslint-disable-next-line no-unused-vars
    function errorCatcher(error:any) {
        const { message } = error.response.data;
        setError(message);
    }

    useEffect(() => {
        if (error !== null) {
            console.log(error);
            setError(null);
        }
    }, [error]);

    async function getUserData() {
        try {
            const {content} = await getService.logInUsers();
            setCurrentUser(content);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if(localStorageService.getAccessToken()) {
            getUserData();
        }
    },[])


    return(
        <AuthContext.Provider value={{signUp, signIn, currentUser, loginOut}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;