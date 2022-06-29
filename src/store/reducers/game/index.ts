import {
    cardStates,
    GameAction,
    GameState,
    TypeCard
} from "./types";
import {shuffle} from "../../../common/functions";

const initialState: GameState = {
    level: 1,
    score: 0,
    cards: []
}

export default function gameReducer(state = initialState, action: GameAction) {
    switch(action.type) {
        case 'GAME_INITIAL':
            let _cards = [];
            for (let i = 1; i <= 9; i++) {
                _cards.push({
                    state: cardStates.CLOSED,
                    image: `/images/${i}.png`
                });
            }
            for (let i = 1; i <= 9; i++) {
                _cards.push({
                    state: cardStates.CLOSED,
                    image: `/images/${i}.png`
                });
            }
            shuffle(_cards);
            return {...state, score: 0, cards: _cards};
            break;
        case 'CLICK_CARD':
            if (state.cards[action.id].state == cardStates.MATCHED)
                return {...state};

            let openedCards = state.cards.filter(card => card.state == cardStates.OPENED);
            if (openedCards.length <= 1) {
                state.cards[action.id].state = cardStates.OPENED;
                state.score++;
            }
            return {...state};
            break;
        case 'INTERVAL':
            let _openedCards = state.cards.filter(card => card.state == cardStates.OPENED);
            if (_openedCards.length == 2) {
                if (_openedCards[0].image == _openedCards[1].image) {
                    _openedCards[0].state = cardStates.MATCHED;
                    _openedCards[1].state = cardStates.MATCHED;
                } else {
                    _openedCards[0].state = cardStates.CLOSED;
                    _openedCards[1].state = cardStates.CLOSED;
                }
                return {...state};
            }
            return {...state};
        default:
            return state;
    }
}