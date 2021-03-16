import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Input from '../03/Input';

storiesOf('Input', module)
  .add('basic setting', () => <Input name="name" />)
  .add('lable example', () => <Input name="name" lable="name" />)
  .add('onChange example', () => <Input name="name" onChange={action('onChange 이벤트 발생')} />);
