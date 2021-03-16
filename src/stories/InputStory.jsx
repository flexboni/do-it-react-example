import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from '../03/Input';

storiesOf('Input', module)
  .add('basic setting', () => <Input name="name" />)
  .add('lable example', () => <Input name="name" lable="name" />);
