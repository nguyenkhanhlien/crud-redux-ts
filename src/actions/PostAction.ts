import { PostModel } from '../model/PostModel'
export enum ActionTypes {
    ADD_POST= 'ADD_POST'
}

export interface addPostAction {
    type: ActionTypes.ADD_POST,
    payload: {
        post: PostModel
    }
}

export function addPost(data: PostModel):addPostAction {
    return {
        type: ActionTypes.ADD_POST,
        payload: {
            post: data
        }
    }
}

export type PostAction = addPostAction;