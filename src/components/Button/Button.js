import React from 'react';
import PropTypes from 'prop-types';

function Button ({ button: { id, type, style, title, state} }) {
    if (type === 'button') {
        return (
            <p>
                <button className={`button button--${style}`}
                        id={id}
                        title={title}>
                    Button {style}
                </button>
            </p>
        );
    }

    if (type === 'input') {
        return (
            <p>
                <input type="button"
                       className={`button button--${style}`}
                       id={id}
                       title={title}
                       value={`Input button ${style}`}
                />
            </p>
        )
    }

    if (type === 'link') {
        return (
            <p>
                <a href="#" className={`button button--${style}`}
                        id={id}
                        title={title}>
                    Link button {style}
                </a>
            </p>
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