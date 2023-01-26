import { configureStore } from '@reduxjs/toolkit';
//import sagaMiddleware, { rootSaga } from './sagas/rootSaga';

import guitarReducer from './reducers/guitar';
import categoryReducer from './reducers/category';

export const store = configureStore({
  reducer: {
    guitar: guitarReducer,
    category: categoryReducer
  },
  //middleware: [sagaMiddleware]
});

//sagaMiddleware.run(rootSaga);


export default store;