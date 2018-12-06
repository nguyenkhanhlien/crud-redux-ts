import { combineReducers } from 'redux';
import * as PostReducer from './PostReducer';

export interface State {
    post: PostReducer.State
}

export const initialState: State = {
    post: PostReducer.initialState
}

export const reducer = combineReducers<State>({
    post: PostReducer.postReducer
})