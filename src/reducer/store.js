import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { filterContactsReducer } from './filterSlice';
import { phoneBookApi } from './phoneBookApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

const rootReducer = combineReducers({
  [phoneBookApi.reducerPath]: phoneBookApi.reducer,
  filter: filterContactsReducer,
});

export const store = configureStore({
  reducer: rootReducer,

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    phoneBookApi.middleware,
  ],
});

setupListeners(store.dispatch);
