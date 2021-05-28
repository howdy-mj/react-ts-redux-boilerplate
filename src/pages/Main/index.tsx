import { useDispatch, useSelector } from 'react-redux';

import { inputValue } from '@store/input/selector';
import { Title } from '@components/Text';
import Example from '@components/Example';

const Main = () => {
  // const input = useSelector(inputValue);

  return (
    <div>
      <Title>Main</Title>
      {/* <input value={inputValue} /> */}
      <Example />
    </div>
  );
};

export default Main;
