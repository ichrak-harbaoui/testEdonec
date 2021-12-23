import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { productReducer } from './reducer/productReducer';

const rootReducer = combineReducers({
	product: productReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RooteState = ReturnType<typeof rootReducer>;
