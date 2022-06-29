import React, {FunctionComponent} from "react";
import {Routes, Route} from 'react-router-dom';
import {routes, IRoute} from "../router";

const AppRouter: FunctionComponent = () => {
    return (
        <Routes>
            {routes.map((route, i) =>
                <Route path={route.path} element={<route.element />} key={i} />
            )}
        </Routes>
    )
}

export default AppRouter;