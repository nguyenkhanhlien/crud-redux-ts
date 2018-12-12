import { PostAction, ActionTypes } from "../actions/PostAction";
import { PostModel } from "../model/PostModel";

export interface State {
    post: PostModel[]
}

export const initialState: State = {
    post: []
}

export function postReducer(state: State = initialState, action: PostAction) {
    switch (action.type) {
        case ActionTypes.ADD_POST: {
            const temp = action.payload.post;
            console.log('data:', action.payload.post)
            return {
                ...state,
                posts: [...state.post, temp]
            }
        }
        default: return state
    }
}