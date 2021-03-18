import React from 'react';
import { storiesOf } from '@storybook/react';

import ReduxApp from '../07/ReduxApp';
import AdvReduxApp from '../07/AdvReduxApp';
import SearchFilterReduxApp from '../07/SearchFilterReduxApp';

storiesOf('ReduxApp', module)
  .addWithJSX('Basic Setting', () => <ReduxApp />)
  .addWithJSX('Advanced Setting', () => <AdvReduxApp />)
  .addWithJSX('SearchFilter  Setting', () => <SearchFilterReduxApp />);
