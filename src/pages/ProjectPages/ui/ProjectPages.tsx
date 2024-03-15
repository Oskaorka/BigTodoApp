import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/roouteConfig';
import './ProjectPage.scss'
import FormRegistration from 'widgets/Form/FormRegistration';
import LogIn from 'widgets/Form/LogIn';
import FormLogin from 'widgets/Form/FormLogin';
import { useAuth } from 'app/provider/router/service/useAuth';
import Button from 'shared/ui/Button/Button';
import { useEffect } from 'react';
const ProjectPagese = () => {
    const {currentUser} = useAuth();
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
    // console.log(currentUser);
    const handleloginOut = () => {
        localStorage.clear();
        // console.log('out');
        
    }
    
    return (
        <div>
            <div className="mainPage-wrapper__logIn">
                {/* { !currentUser || isObjectEmpty(currentUser) &&  */}
                {/* <> */}
                <FormLogin/>
                <FormRegistration/>
                {/* </> */}
                {/* || <Button onClick={handleloginOut} className="btn btn-logIn" children="LogOut"/>} */}
            </div>
            <div className="mainPage-title">{currentUser?.userName} select a project</div>
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
 
        </div>

    )
};

export default ProjectPagese;