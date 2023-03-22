import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from '../reducers/rootReducer';
import rootSaga from '../sagas';


const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
// const configureStore=()=>{
//     const sagaMiddleware=createSagaMiddleware();
//     return{
//         ...createStore(rootReducer,applyMiddleware(sagaMiddleware)),
//         runSaga:sagaMiddleware.run(rootSaga)
//     }
// };

const store=createStore(rootReducer,applyMiddleware(...middleware));
sagaMiddleware.run(rootSaga);

export default store;

