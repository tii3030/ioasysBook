import { configureStore } from "@reduxjs/toolkit";
import addUser from  '../reducers/addUser';

export default configureStore ({
    reducer: {
        addUser: addUser,
    },
});