import axios from 'axios';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';
// import { createUsers, logInUsers } from './loadList';
import { createUsers} from './loadList';
// import { createUsers, logInUsers } from './loadList';
import { useNavigate } from 'react-router-dom';
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

// const key = '';
// const url = ,
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
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [error, setError] = useState(null);
    

    // const [data, setData] = useState({
    //     email:'',
    //     password:'',
    //     userName: ''
    // })
    console.log(currentUser);

    // async function signUp ({email, password, ...rest}:FormSignUp) {
    async function signUp ({email, password, ...rest}:FormSignUp) {
        // const key = 'AIzaSyBo7_E3-xSwK9ATdoiXE4o9sfn3HSw7iUU';
        // const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`;
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
        
        // return data
        
    }

    async function signIn ({email, password}:FormSignUp) {
        // const key = 'AIzaSyBo7_E3-xSwK9ATdoiXE4o9sfn3HSw7iUU';
        // const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`;
        try {
            // const { data } = await axios.post(url, {
            const { data } = await httpAuth.post(
                'accounts:signInWithPassword',
                {
                    email,
                    password,
                    returnSecureToken:true
                })
            // console.log(data);
            
            setTokens(data);
            getUserData()
            // await logInUsers({_id: data.localId, email})
            // console.log(data);
            // console.log(getUserData());
        } catch (error) {
            console.log(error);
            
        }
        
        // return data
        
    }


    async function createUser (content: unknown) {
        try {
            
            const { data } = await createUsers(content)
            // console.log(content);
            // console.log(data);
            setCurrentUser(data);
        } catch (error) {
            
            console.log(error);
        }
        
    }

    // const onToggleModal = useCallback(() => {
    //     setIsOpenModal((prev) => !prev);
    //     setData({
    //         email: '',
    //         password: '',
    //         userName: ''
    //     })
    // }, []);

    // const handleChangeForText = ({ target }:any) => {
    //     setData((prevstate:any) => ({
    //         ...prevstate,
    //         [target.name]: target.value
    //     }));

    // };

    // const handleSubmit = (event: React.FormEvent<HTMLFormElement & FormSignUp>) => {
    //     event.preventDefault();
    //     try {
    //         onToggleModal();
    //         signUp(data);
    //         console.log(data);
            
    //     } catch (error) {
    //         console.log(error);
            
    //     }
        
    // }

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
            // const {data} = await logInUsers();
            console.log(content);
            
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
        <AuthContext.Provider value={{signUp, signIn, currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;