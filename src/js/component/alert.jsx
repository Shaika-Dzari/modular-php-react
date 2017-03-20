import React, {PropTypes} from 'react';

const Alert = ({message, alertType = 'info'}) => {
    let cs = 'alert ' + alertType;
    return (
        <div className="{cs}">
            {message}
        </div>
    );
}

Alert.propTypes = {
    message: PropTypes.string.isRequired,
    alertType: PropTypes.string
};

export default Alert;