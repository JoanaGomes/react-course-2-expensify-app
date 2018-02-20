import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

export const Prompt = ({ visible, onCancel, title, content, options = [] }) => {
  const extraButtons = options.map((opt) => (
    <button key={ opt.label } className='button' onClick={ opt.onClick }>{ opt.label }</button>
  ));

  return (
    <Modal
      isOpen={ visible }
      onRequestClose={ onCancel }
      closeTimeoutMS={ 200 }
      className='modal'
      contentLabel='prompt'>
      <div className='modal__top'>
        <h3 className='modal__title'>{ title }</h3>
      </div>
      <div className='modal__body'>
        <p>{ content }</p>
      </div>
      <div className='modal_buttons'>
        { extraButtons }
      </div>
    </Modal>
  )
};

Prompt.propTypes = {
  visible:    PropTypes.bool.isRequired,
  onCancel:   PropTypes.func.isRequired,
  title:      PropTypes.string.isRequired,
  content:    PropTypes.string.isRequired,
  options:    PropTypes.array
}

export default Prompt;