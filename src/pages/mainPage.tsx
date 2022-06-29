import React, {FunctionComponent} from "react";
import {Link} from 'react-router-dom';

const MainPage: FunctionComponent = () => {
    return (
        <div className={'layer'}>
            <h1 className="header__text">Concentration game</h1>
            <div className="description">
                Concentration, also known as Memory, Shinkei-suijaku (Japanese meaning "nervous breakdown"), Matching Pairs, Match Match, Match Up, Pelmanism, Pexeso or simply Pairs, is a card game in which all of the cards are laid face down on a surface and two cards are flipped face up over each turn. The object of the game is to turn over pairs of matching cards.
            </div>
            <div className="btns">
                <Link to={'/game'} className={'btn'}>
                    <svg height="32" width="32" aria-hidden="true" viewBox="0 0 408.221 408.221" version="1.1">
                        <path d="M204.11,0C91.388,0,0,91.388,0,204.111c0,112.725,91.388,204.11,204.11,204.11c112.729,0,204.11-91.385,204.11-204.11    C408.221,91.388,316.839,0,204.11,0z M286.547,229.971l-126.368,72.471c-17.003,9.75-30.781,1.763-30.781-17.834V140.012    c0-19.602,13.777-27.575,30.781-17.827l126.368,72.466C303.551,204.403,303.551,220.217,286.547,229.971z" fill="#282c34"/>
                    </svg>
                    <span>Start new game</span>
                </Link>
            </div>
        </div>
    );
};

export default MainPage;