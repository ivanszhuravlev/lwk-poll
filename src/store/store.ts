import {
  configureStore,
  ThunkAction as ThunkActionDefault,
  Action,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import {
  TypedUseSelectorHook,
  useDispatch as useDispatchDefault,
  useSelector as useSelectorDefault,
} from 'react-redux';
import {isEqual} from 'lodash';
import {ChatsStore} from './stores/chats/chatsStore';
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: {
    chatsStore: ChatsStore.reducer,
  },
  middleware: [thunk],
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type ThunkAction<R> = ThunkActionDefault<
  R,
  RootStore,
  null,
  Action<string>
>;

export const useDispatch = () =>
  useDispatchDefault<ThunkDispatch<RootStore, null, Action<string>>>();
export const useSelector: TypedUseSelectorHook<RootStore> = (
  store,
  equalityFn = isEqual,
) => {
  return useSelectorDefault(store, equalityFn);
};
