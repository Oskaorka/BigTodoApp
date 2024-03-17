import { Navigate, Outlet} from 'react-router-dom';
import { useAuth } from '../service/useAuth';

const ProtectedRoute = () => {
    
    const {currentUser} = useAuth();
    const isEmpty = (x:string) => !Object.keys(x || {}).length;
    if( isEmpty(currentUser)) {
        return ( <Navigate to={'/'}/> );
    }
    return <Outlet/> ;
}
 
export default ProtectedRoute;