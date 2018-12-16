import React from 'react';
import PropTypes from 'prop-types';

function Button ({ button: { id, type, title, state, icon, modifier } }) {
    return (
        <button className={`button {this.props.state ? button--${state} : null} {this.props.icon ? ${icon} : null} button--${modifier}`}>
            Soy un botón
        </button>
    );
}

Button.propTypes = {
    button: PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        state: PropTypes.string,
        icon: PropTypes.string,
        modifier: PropTypes.modifier,
    }),
};

export default Button;