import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './RegistrationModel.css';

Modal.setAppElement('#root');

const RegistrationModal = ({ isOpen, onClose, onRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let timer;
    if (showPassword) {
      timer = setTimeout(() => {
        onClose();
      }, 10000); // Ferme la fenêtre après 10 secondes
    }
    return () => clearTimeout(timer);
  }, [showPassword, onClose]);

  const handleRegister = () => {
    const generatedPassword = Math.random().toString(36).slice(-8);
    setPassword(generatedPassword);
    setShowPassword(true); // Affiche le mot de passe après l'enregistrement
    onRegister({ name, email, password: generatedPassword });
  };

  const handlePasswordClick = () => {
    navigator.clipboard.writeText(password)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Réinitialise le message après 2 secondes
      })
      .catch(err => {
        console.error('Failed to copy!', err);
      });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Registration"
      className="modal"
      overlayClassName="overlay"
    >
      <h2>Registration</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
      {showPassword && (
        <div>
          <p>
            Your special password is: 
            <strong 
              onClick={handlePasswordClick} 
              title="Click to copy"
            >
              {password}
            </strong>
          </p>
          {copied && <p className="copied">Password copied to clipboard!</p>}
        </div>
      )}
    </Modal>
  );
};

export default RegistrationModal;
