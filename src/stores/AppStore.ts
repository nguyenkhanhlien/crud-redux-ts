import { createStore } from 'redux';
import { initialState, reducer } from '../reducer/RootReducer';

const appStore = createStore(reducer, initialState);
export default appStore