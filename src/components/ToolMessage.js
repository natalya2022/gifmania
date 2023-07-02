import React from 'react';

const ToolMessage = ({ onClose, toolMessage, isOpen }) => {
  
  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`} onClick={onClose}>      
      <div className="popup__container popup_type_register" onClick={(e) => e.stopPropagation()}>
        <button className="popup__close" type="button" aria-label="Закрыть" onClick={onClose} />                
        <h2 className="popup__tooltip">{toolMessage.text}</h2>
      </div>
    </div>
  );
};

export default ToolMessage;
