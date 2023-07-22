import PropTypes from 'prop-types';

import { NotificationText } from './Notification.styled';

export const Notification = ({ message }) => (
  <NotificationText>{message}</NotificationText>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};