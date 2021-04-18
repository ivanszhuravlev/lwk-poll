import React from 'react';
import {FormCreatePollStyles} from './FormCreatePoll.styles';
import {LabelCounter} from './LabelCounter';
import {Option} from './Option';
import {useDispatch, useSelector} from '../../store/store';
import {
  selectOptions,
  selectQuestion,
  addOption,
  removeOption,
  editOption,
  setQuestion,
} from '../../store/stores/createPoll/createPollStore';
import {ButtonIconSwitch} from '../Button/ButtonIconSwitch';

export const maxQuestionLength = 140;
export const maxItemsCount = 8;

interface IOption {
  id: number;
  text: string;
}

export const FormCreatePoll = () => {
  const dispatch = useDispatch();

  const question = useSelector(selectQuestion);
  const options = useSelector(selectOptions);

  const onChange = (text: string) => dispatch(setQuestion(text));
  const addAnOption = () => dispatch(addOption());

  const onChangeOption = (id: number, text: string) => {
    return dispatch(editOption({id, text}));
  };

  const onRemoveOption = (id: number) => dispatch(removeOption(id));

  const renderOption = (item: IOption) => (
    <Option
      onChange={onChangeOption}
      key={item.id}
      id={item.id}
      onRemove={onRemoveOption}
    />
  );

  return (
    <FormCreatePollStyles.Container>
      <FormCreatePollStyles.Block>
        <LabelCounter
          label={'Question'}
          current={question.length}
          max={maxQuestionLength}
        />
        <FormCreatePollStyles.InputQuestion
          value={question}
          onChangeText={onChange}
          placeholder={'Ask a question'}
          maxLength={maxQuestionLength}
        />
      </FormCreatePollStyles.Block>
      <FormCreatePollStyles.BlockOptions>
        <LabelCounter
          label={'Options'}
          current={options.length}
          max={maxItemsCount}
        />
        {options.map(renderOption)}
        {options.length < maxItemsCount ? (
          <FormCreatePollStyles.ButtonAdd
            label={'Add an option'}
            onPress={addAnOption}
          />
        ) : null}
      </FormCreatePollStyles.BlockOptions>
      <FormCreatePollStyles.Block>
        <ButtonIconSwitch
          iconName={'verified-user'}
          label={'Anonymous voting'}
          onToggle={() => null}
        />
      </FormCreatePollStyles.Block>
      <FormCreatePollStyles.Block>
        <ButtonIconSwitch
          iconName={'queue'}
          label={'Ability to add more options'}
          onToggle={() => null}
        />
      </FormCreatePollStyles.Block>
    </FormCreatePollStyles.Container>
  );
};
