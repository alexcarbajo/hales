import React from 'react';
import { storiesOf } from '@storybook/react';

import Hero from './Hero';
import { createTask, actions } from '../Header/Header.stories';

export const defaultTasks = [
    createTask({ state: 'TASK_INBOX' }),
    createTask({ state: 'TASK_INBOX' }),
];

storiesOf('Hero', module)
    .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
    .add('default', () => <Hero tasks={defaultTasks} {...actions} />)
    .add('loading', () => <Hero loading tasks={[]} {...actions} />)
    .add('empty', () => <Hero tasks={[]} {...actions} />);