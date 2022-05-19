import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from  '../reducers/reducers';

export default configureStore ({
    reducer: {
        tokenData: tokenReducer,
    },
});