import React from 'react';
import PropTypes from 'prop-types';

export default function TheirMessage({ lastMessage, message }) {
  const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;

  return (
    <div className="message-row">
      {isFirstMessageByUser && (
        <div 
          className="message-avatar"
          style={{ backgroundImage: `url(${message?.sender?.avatar})`}}
        />
      )}

      {message?.attachments?.length > 0 
        ? (
          <img 
            src={message.attachments[0].file}
            alt="message--attachment"
            className="message-image"
            style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px'}}
          />
          ) : (
            <div className="message" style={{ float: 'left', backgroundColor: '#CEBCDC',  marginLeft: isFirstMessageByUser ? '4px' : '48px' }}>
              {message.text}
            </div>
          )
      }
    </div>
  );
}

TheirMessage.propTypes = {
  lastMessage: PropTypes.string,
  message: PropTypes.string,
}