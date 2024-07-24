import {createStore,applyMiddleware,compose}from 'redux';
import { thunk } from 'redux-thunk';
import rootReducer from './rootReducer';

const middlewareEnhancer=applyMiddleware(thunk)
const composedEnhancer=compose(middlewareEnhancer)

const store=createStore(rootReducer,undefined,composedEnhancer)

export default store
