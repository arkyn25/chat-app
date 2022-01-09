import React from 'react';
import PropTypes from 'prop-types';

export default function MyMessage({ message }) {
  if(message?.attachments?.length > 0) {
    return (
      <img 
        src={message.attachments[0].file}
        alt="message--attachment"
        className="message-image"
        style={{ floart: 'right'}}
      />
    )
  }
  return (
    <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50' }}>
      {message.text}
    </div>
  );
}

MyMessage.propTypes = {
  message: PropTypes.string,
}