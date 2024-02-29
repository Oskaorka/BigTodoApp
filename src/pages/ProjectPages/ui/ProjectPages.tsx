import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/roouteConfig';
import './ProjectPage.scss'
import FormRegistration from 'widgets/Form/FormRegistration';
import LogIn from 'widgets/Form/LogIn';
import FormLogin from 'widgets/Form/FormLogin';
import { useAuth } from 'app/provider/router/service/useAuth';
const ProjectPagese = () => {
    const {currentUser} = useAuth();
    console.log(currentUser);
    
    return (
        <div>
            <div className="mainPage-wrapper__logIn">
                <FormLogin/>
                <FormRegistration/>

                {/* <LogIn/> */}
            </div>
            <div className="mainPage-title">Select a project</div>
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