import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

export function createButton(attrs) {
    return {
        id: 'Button' + Math.round(Math.random() * 1000000).toString(),
        type: 'button',
        style: 'primary',
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
    .add('primary', () => <Button button={createButton({ style: 'primary', state: 'BUTTON_PRIMARY' })} {...actions} />)
    .add('secondary', () => <Button button={createButton({ style: 'secondary', state: 'BUTTON_SECONDARY' })} {...actions} />)
    .add('inputButton', () => <Button button={createButton({ type: 'input', state: 'BUTTON_SECONDARY' })} {...actions} />)
    .add('linkButton', () => <Button button={createButton({ type: 'link', state: 'BUTTON_SECONDARY' })} {...actions} />);