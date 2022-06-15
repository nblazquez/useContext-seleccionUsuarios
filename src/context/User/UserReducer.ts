import { Estado, Usuario } from '../types';

type UserReducerAction = 
    | { type: 'GET_USERS', payload: Usuario[]}
    | { type: 'GET_PROFILE', payload: Usuario};

export const UserReducer = (state: Estado, action: UserReducerAction): Estado => {
    switch (action.type) {
        case 'GET_USERS':
            return{
                ...state,
                users: action.payload
            }
        case 'GET_PROFILE':
            return{
                ...state,
                selectedUser: action.payload
            }
        default:
            return state;
    }
};
