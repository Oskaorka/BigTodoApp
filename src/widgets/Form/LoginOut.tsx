import { useAuth } from 'app/provider/router/service/useAuth';
import { useEffect } from 'react';

const logOut = () => {
    const {loginOut} = useAuth()
    useEffect(() => {
        loginOut()
    },[])
    return (
        <h1>Loading</h1> 
    );
}
 
export default logOut;