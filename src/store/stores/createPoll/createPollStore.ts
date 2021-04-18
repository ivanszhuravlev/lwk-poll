import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootStore, ThunkAction} from '../../store';
import {IMessage, addMessage} from '../chats/chatsStore';
import {mockUsers} from '../../../mocks/chats';

export const maxQuestionLength = 140;
export const maxItemsCount = 8;

interface IOption {
  id: number;
  text: string;
}

interface ICreatePollState {
  options: IOption[];
  question: string;
  greatestId: number;
}

const initialState: ICreatePollState = {
  options: [],
  question: '',
  greatestId: 0,
};

export const CreatePollStore = createSlice({
  name: 'CreatePoll',
  initialState,
  reducers: {
    addOption: state => {
      state.options.push({id: state.greatestId, text: ''});
      state.greatestId += 1;
    },
    removeOption: (state, {payload}: PayloadAction<number>) => {
      console.log('REMOVE 1', state.options);
      state.options = state.options.filter(({id}) => id !== payload);
      console.log('REMOVE 2', state.options);
    },
    setQuestion: (state, {payload}: PayloadAction<string>) => {
      state.question = payload;
    },
    editOption: (
      state,
      {payload}: PayloadAction<{id: number; text: string}>,
    ) => {
      console.log('EDIT OPTION', payload);
      const index = state.options.findIndex(({id}) => id === payload.id);

      state.options[index].text = payload.text;
    },
    clearForm: state => {
      state.options = initialState.options;
      state.question = initialState.question;
      state.greatestId = initialState.greatestId;
    },
  },
});

export const {
  addOption,
  removeOption,
  setQuestion,
  editOption,
  clearForm,
} = CreatePollStore.actions;

export const selectQuestion = ({createPollStore}: RootStore) =>
  createPollStore.question;

export const selectOptions = ({createPollStore}: RootStore) =>
  createPollStore.options;

export const createPollAction = (chatId: string): ThunkAction<void> => (
  dispatch,
  getState,
) => {
  const state = getState();
  const question = selectQuestion(state);
  const options = selectOptions(state);

  const isEachOptionValid = options.every(({text}) => text.trim().length > 0);

  if (!isEachOptionValid || !question.trim().length) {
    return;
  }

  const message: IMessage = {
    id: 'm1000',
    text: question,
    type: 'poll',
    user: mockUsers[0],
    options,
  };

  dispatch(addMessage({chatId, message}));
  dispatch(clearForm());
};
