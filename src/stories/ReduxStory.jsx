import React from 'react';
import { storiesOf } from '@storybook/react';

import ReduxApp from '../07/ReduxApp';

storiesOf('ReduxApp', module).addWithJSX('기본 설정', () => <ReduxApp />);
