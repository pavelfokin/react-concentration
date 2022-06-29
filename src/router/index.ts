import React from "react";
import MainPage from "../pages/mainPage";
import GamePage from "../pages/gamePage";

export interface IRoute {
    path: string,
    element: React.ComponentType,
    exact?: boolean
}

export enum routePaths {
    MAIN = '/',
    GAME = '/game'
}

export const routes: IRoute[] = [
    {path: routePaths.MAIN, exact: true, element: MainPage},
    {path: routePaths.GAME, exact: true, element: GamePage}
]