import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/roouteConfig';
import './ProjectPage.scss'
import FormRegistration from 'widgets/Form/FormRegistration';
import LogIn from 'widgets/Form/LogIn';
import FormLogin from 'widgets/Form/FormLogin';
import { useAuth } from 'app/provider/router/service/useAuth';
import Button from 'shared/ui/Button/Button';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logOut from 'widgets/Form/LoginOut';
const ProjectPagese = () => {
    const {currentUser, loginOut} = useAuth();
    const navigate = useNavigate();
    // const isObjectEmpty = (objectName:any) => {
    //     for (const prop in objectName) {
    //         // eslint-disable-next-line no-prototype-builtins
    //         if (objectName.hasOwnProperty(prop)) {
    //             return false;
    //         }
    //     }
    //     return true;
    // };
    // useEffect(()=>{
    //     console.log(isObjectEmpty(currentUser));
        
    // },[currentUser])
    const isEmpty = (x:any) => !Object.keys(x || {}).length;
    // console.log(currentUser.userName);
    // console.log(isEmpty(currentUser));
    /// выход пользователя из системы необходимо доработать
    const handleloginOut = () => {
        // navigate('/');
        // localStorage.clear();
        // console.log(currentUser);
        loginOut();
        // logOut
        
    }
    
    return (
        <div>
            <div className="mainPage-wrapper__logIn">
                { !currentUser || isEmpty(currentUser)? 
                    <>
                        <FormLogin/>
                        <FormRegistration/>
                    </>
                    : <Button onClick={handleloginOut} className="btn btn-logIn" children="LogOut"/>} 
                {/* // <Button onClick={handleloginOut} className="btn btn-logIn" children="LogOut"/> */}
            </div>
            {!isEmpty(currentUser)?
                <>
                    <div className="mainPage-title">Hello {currentUser?.userName}, select a project</div>
                    <div className={'mainPage'}>
                        <AppLink
                            className={'mainPage-link'}
                            to={RoutePath.construction}
                        >
                            <span className={'cls.link'}>Строительство объектов</span>

                        </AppLink>
                        <AppLink
                            className={'mainPage-link'}
                            to={RoutePath.dev_estimates}
                        >
                            <span className={'cls.link'}>Разработка сметы</span>
                        </AppLink>
                        <AppLink
                            className={'mainPage-link'}
                            to={RoutePath.planing}
                        >
                            <span className={'cls.link'}>Планирование</span>
                        </AppLink>
                    </div>
 
                </>
                : <div className="mainPage-title">Hello, select SignIn or SignUp</div>}
            
        </div>

    )
};

export default ProjectPagese;