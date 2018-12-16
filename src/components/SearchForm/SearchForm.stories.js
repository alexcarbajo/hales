import React from 'react';
import { storiesOf } from '@storybook/react';

import SearchForm from './SearchForm';
import { Button } from '../Button/Button.stories';

storiesOf('SearchForm', module)
    .add('default', () => <SearchForm />);