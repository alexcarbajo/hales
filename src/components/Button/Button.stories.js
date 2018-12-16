import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

export function createButton(attrs) {
    return {
        id: 'Button' + Math.round(Math.random() * 1000000).toString(),
        title: 'Test Button',
        state: 'I am a state example',
        updatedAt: Date.now(),
        ...attrs,
    };
}

export const actions = {
    toBeDefined: action('toBeDefined'),
};

storiesOf('Button', module)
    .add('default', () => <Button button={createButton({ state: 'BUTTON_DEFAULT' })} {...actions} />)
    .add('primary', () => <Button button={createButton({ state: 'BUTTON_PRIMARY' })} {...actions} />)
    .add('withIcon', () => <Button button={createButton({ state: 'BUTTON_ICON', icon: 'ICON' })} {...actions} />);