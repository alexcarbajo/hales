import React from 'react';
import PropTypes from 'prop-types';

function Header ({ task: { id, title, state }, onArchiveTask, onPinTask }) {
    return (
        <div className={`${state}`}>
            <>
                <input
                    type="checkbox"
                    defaultChecked={state === 'TASK_ARCHIVED'}
                    disabled={true}
                    name="checked"
                />
                <span onClick={() => onArchiveTask(id)} />
            </>

            <>
                <input type="text" value={title} readOnly={true} placeholder="Input title" />
            </>

            <div onClick={event => event.stopPropagation()}>
                {state !== 'TASK_ARCHIVED' && (
                    <a onClick={() => onPinTask(id)}>
                        Icon star
                    </a>
                )}
            </div>
        </div>
    );
}

Header.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
    }),
    onArchiveTask: PropTypes.func,
    onPinTask: PropTypes.func,
};

export default Header;
