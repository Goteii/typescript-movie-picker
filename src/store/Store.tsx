import React from 'react';
import {IEpisode, IAction, IState} from '../utils';


const initialState: IState = {
    episodes: [],
    favourites: []
};

export const Store = React.createContext<IState | any>(initialState);

const reducer = (state: IState, action: IAction) => {
        switch(action.type) {
            case 'FETCH_DATA':
                return {...state, episodes: action.payload}
            case 'ADD_FAV':
                return {...state, favourites: [...state.favourites, action.payload]}
            case 'REMOVE_FAV':
                return {...state, favourites: action.payload}
                default:
                    return state;
        }
}

export function StoreProvider (props: any) {
    const [state, dispatch] = React.useReducer(reducer, initialState);
        return <Store.Provider value={{state, dispatch}}>{props.children}</Store.Provider> 
}

