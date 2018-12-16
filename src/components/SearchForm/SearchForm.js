import React from 'react';
import Button from '../Button/Button';
import {actions, createButton} from "../Button/Button.stories";

function SearchForm() {
    return (
        <div className={`o-highlightBox c-searchForm`}>
            asdasd
            <Button button={createButton({ style: 'primary', state: 'BUTTON_PRIMARY' })} {...actions} />
        </div>
    );
}

export default SearchForm;
