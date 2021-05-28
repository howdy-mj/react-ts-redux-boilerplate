import { useDispatch, useSelector } from 'react-redux';

import { inputValue } from '@store/input/selector';
import styled from '@emotion/styled';
import { updateInputValue } from '@store/input/reducer';

const Example = () => {
  const dispatch = useDispatch();
  const inputVal = useSelector(inputValue);

  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateInputValue(e.target.value));
  };

  return (
    <div>
      <Input value={inputVal} onChange={(e) => changeInputValue(e)} />
    </div>
  );
};

export default Example;

const Input = styled.input`
  border: 1px solid black;
`;
