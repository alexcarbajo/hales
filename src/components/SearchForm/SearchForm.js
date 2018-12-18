import React from 'react';
import Button from '../Button/Button';
import {actions, createButton} from "../Button/Button.stories";

function SearchForm() {
    return (
        <div className={`o-highlightBox c-searchForm`}>
            <div className={`c-searchInput has-error`}>
                <div class={`c-searchInput__icon`}>
                    Icon
                </div>
                <div className={`c-searchInput__icon`}>
                    Label
                    PlaceHolder
                    Text
                </div>
                <div className={`c-searchInput__message`}>
                    <span className={`c-searchInput__error`}>Required</span>
                </div>
            </div>
            <Button button={createButton({ style: 'primary', state: 'BUTTON_PRIMARY' })} {...actions} />
        </div>
    );
}

export default SearchForm;
