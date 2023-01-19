import PropTypes from 'prop-types';
import { MessageContainer,Message } from './Notification.styled';



export const Notification=({ message })=> {
    return (
        <MessageContainer>
            <Message>{message}</Message>
        </MessageContainer>
    )
}

Notification.protoType = {
    message: PropTypes.string.isRequired,
}