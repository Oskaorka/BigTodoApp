import {Route, Routes} from 'react-router-dom';
// import { Suspense } from 'react';
import { routeConfig } from 'shared/config/routeConfig/roouteConfig';
import ProtectedRoute from './ProtectedRote';
import ProjectPagese from 'pages/ProjectPages/ui/ProjectPages';


const AppRouter = () => {
    return(
        // <Suspense fallback={<PageLoader />}>
        <Routes>
            <Route index element={<ProjectPagese/>}/>
            <Route element={<ProtectedRoute/>}
            >
                { 
                    Object.values(routeConfig).map(({ element, path }) => (
                        <Route
                            key={path}
                            element={element}
                            path={path}
                        />
                    )) 
                }

            </Route>
        </Routes>
    // </Suspense>
    );
}

export default AppRouter;