import React from 'react';
import PropTypes from 'prop-types';

const NotificationMessage = ({ message }) => {
    return <p>{message}</p>;
};

NotificationMessage.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Notification;