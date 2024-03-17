import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/roouteConfig';
import './ProjectPage.scss'
import FormRegistration from 'widgets/Form/FormRegistration';
import FormLogin from 'widgets/Form/FormLogin';
import { useAuth } from 'app/provider/router/service/useAuth';
import Button from 'shared/ui/Button/Button';
const ProjectPagese = () => {
    const {currentUser, loginOut} = useAuth();
    const isEmpty = (x:string) => !Object.keys(x || {}).length;
    
    const handleloginOut = () => {
        loginOut();
    }
    const currentClass = isEmpty(currentUser)?'mainPage-wrapper__logIn':'mainPage-wrapper__logOut'
    
    return (
        <div>
            <div className={currentClass}>
                { !currentUser || isEmpty(currentUser)? 
                    <>
                        <FormLogin/>
                        <FormRegistration/>
                    </>
                    : <Button onClick={handleloginOut} className="btn btn-logOut" children="LogOut"/>} 
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