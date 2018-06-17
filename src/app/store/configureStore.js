import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducer';

export const configureStore = preloadedState => {
  const middleWares = [];
  const middleWareEnhancer = applyMiddleware(...middleWares);

  const storeEnhancers = [middleWareEnhancer];

  const composedEnchancer = composeWithDevTools(...storeEnhancers);

  const store = createStore(
      rootReducer,
      preloadedState,
      composedEnchancer
  );

  if (process.env.NODE_ENV != 'production') {
    if (module.hot) {
      module.hot.accept('../reducers/rootReducer.js', () => {
        const newRootReducer = require('../reducers/rootReducer').default;
        store.replaceReducer(newRootReducer);
      })
    }
  }

  return store;
};
