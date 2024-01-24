import { RoutePath } from 'shared/config/routeConfig/roouteConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';

const Navbar = () => {
    return ( 
        <div className={'cls.items'}>
            {/* <AppLink
                className={'cls.item'}
                to={RoutePath.task}
            >
                <span className={'cls.link'}>Строительство объектов</span>

            </AppLink>
            <AppLink
                className={'cls.item'}
                to={RoutePath.task}
            >
                <span className={'cls.link'}>Разработка сметы</span>
            </AppLink>
            <AppLink
                className={'cls.item'}
                to={RoutePath.task}
            >
                <span className={'cls.link'}>Планирование</span>
            </AppLink> */}
        </div>
    );
}
 
export default Navbar;