import React, {FunctionComponent, MouseEventHandler, useState} from "react";
import {store} from "../store";
import gameReducer from "../store/reducers/game";
import {cardStates, TypeCard} from "../store/reducers/game/types";

type Props = {
    id: number,
    state: string,
    image: string,
    clickHandler: (event: React.MouseEvent, id: number) => void
}

const Card: FunctionComponent<Props> = ({id, state, image, clickHandler}) => {
    return (
        <div className="card" onClick={(event) => clickHandler(event, id)}>
            <label className={`${state == cardStates.OPENED ? 'opened' : ''} ${state == cardStates.MATCHED ? 'opened matched' : ''}`}>
                <div className="card__inner">
                    <div className="front"></div>
                    <div className="back"><img src={image} /></div>
                </div>
            </label>
        </div>
    )
}

export default Card;