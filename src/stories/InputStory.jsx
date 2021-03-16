import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Input from '../03/Input';

storiesOf('Input', module)
  .addWithJSX('basic setting', () => <Input name="name" />)
  .addWithJSX('lable example', () => <Input name="name" lable="name" />)
  .addWithJSX('onChange example', () => (
    <Input name="name" onChange={action('onChange 이벤트 발생')} />
  ));
