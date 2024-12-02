import { createStore, combineReducers } from 'redux';
    import userReducer from './reducers/userReducer';
    import courseReducer from './reducers/courseReducer';

    const rootReducer = combineReducers({
      user: userReducer,
      course: courseReducer
    });

    const store = createStore(rootReducer);

    export default store;
