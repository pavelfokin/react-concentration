import React, {Dispatch, FunctionComponent, useEffect, useState} from "react";
import Card from "../components/Card";
import {store} from "../store";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch, useSelector, useStore} from "react-redux";
import {cardStates, TypeCard} from "../store/reducers/game/types";

const GamePage: FunctionComponent = () => {
    const [isAwaitAction, setAwaitAction] = useState(false);
    const {cards, level, score} = useTypedSelector(state => state.gameReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: 'GAME_INITIAL', payload: false});
    }, []);

    const clickHandler = (event: React.MouseEvent, id: number) => {
        event.preventDefault();
        dispatch({type: 'CLICK_CARD', id});

        let openedCards = cards.filter(card => card.state == cardStates.OPENED);
        if (openedCards.length == 2 && !isAwaitAction) {
            setAwaitAction(true);
            setTimeout(() => {
                dispatch({type: 'INTERVAL', payload: false});
                setAwaitAction(false);
            }, 1000);
        }
    }

    return (
        <div className="game">
            <div className="score">
                <div>level <span>{level}</span></div>
                <div>try count <span>{score}</span></div>
            </div>
            <div className="game-board">
                {cards.map((card, i) =>
                    <Card {...card} id={i} clickHandler={clickHandler} key={i}></Card>
                )}
            </div>
        </div>
    )
}

export default GamePage;