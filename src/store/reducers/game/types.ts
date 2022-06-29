export interface GameState {
    level: number,
    score: number,
    cards: TypeCard[]
}

export type TypeCard = {
    state: string,
    image: string
}

export enum cardStates {
    CLOSED = 'CLOSED',
    OPENED = 'OPENED',
    MATCHED = 'MATCHED'
}

export interface InitialAction {
    type: 'GAME_INITIAL',
    payload: boolean
}

export interface CickAction {
    type: 'CLICK_CARD',
    id: number
}

export interface IntervalAction {
    type: 'INTERVAL',
    payload: boolean
}

export type GameAction = InitialAction | CickAction | IntervalAction;