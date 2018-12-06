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

export function addPost(title: string, message: string):addPostAction {
    return {
        type: ActionTypes.ADD_POST,
        payload: {
            post: {
                id: new Date(),
                title: title,
                message: message
            }
        }
    }
}

export type PostAction = addPostAction;