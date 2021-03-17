import React from 'react';
import { storiesOf } from '@storybook/react';

import ReduxApp from '../07/ReduxApp';
import AdvReduxApp from '../07/AdvReduxApp';

storiesOf('ReduxApp', module)
  .addWithJSX('Basic Setting', () => <ReduxApp />)
  .addWithJSX('Advanced Setting', () => <AdvReduxApp />);
