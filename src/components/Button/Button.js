import React from 'react';
import PropTypes from 'prop-types';

function Button ({ button: { id, type, style, title, state} }) {
    if (type === 'button') {
        return (
            <button className={`button button--${style}`}
                    id={id}
                    title={title}>
                Button {style}
            </button>
        );
    }

    if (type === 'input') {
        return (
            <input type="button"
                   className={`button button--${style}`}
                   id={id}
                   title={title}
                   value={`Input button ${style}`}
            />
        )
    }

    if (type === 'link') {
        return (
            <a href="#" className={`button button--${style}`}
                    id={id}
                    title={title}>
                Link button {style}
            </a>
        );
    }
}

Button.propTypes = {
    button: PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        style: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        state: PropTypes.string,
    }),
};

export default Button;