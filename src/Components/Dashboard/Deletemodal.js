import React from 'react';
import deletemodal from '../../assets/Images/Icons/deletemodal.svg'
import cross from '../../assets/Images/Icons/Crossvector.svg'

const Deletemodal = ({ onClose, onDelete }) => {
  return (
    <div className="delete-modal-overlay">

      <div className="modal-content">

        <div className="modal-header">

          <div className="modal-icon">
                <img src={deletemodal} alt="" />
          </div>

          <button className="close-button" onClick={onClose}><img src={cross} alt="" /></button>

        </div>

        <div className="modal-body">
            <h2>Delete Account</h2>
            <p>Aliquam vivamus elementum dictum suspendisse enim metus.</p>
        </div>

        <div className="modal-footer">
          <button className="cancel-button" onClick={onClose}>Cancel</button>
          <button className="delete-button" onClick={onDelete}>Delete</button>
        </div>

      </div>

    </div>
  );
};

export default Deletemodal;
