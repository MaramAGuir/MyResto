import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

interface LoginModalProps {
  show: boolean;
  handleClose: () => void;
  onLogin: (userData: { name: string; email: string; password: string }) => void;
}

function LoginModal({ show, handleClose }: LoginModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [copied, setCopied] = useState(false);
  const [loginSuccessModalOpen, setLoginSuccessModalOpen] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true); // State to track password match

  const handleLogin = () => {
    const generatedPassword = Math.random().toString(36).slice(-8);
    setPassword(generatedPassword);
    setShowPassword(true); // Show password after login
    setTimeout(() => {
      setLoginSuccessModalOpen(true); // Open success modal after 3 seconds
    }, 3000);
  };

  const handlePasswordClick = () => {
    navigator.clipboard.writeText(password)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset message after 2 seconds
      })
      .catch(err => {
        console.error('Failed to copy!', err);
      });
  };

  const handleSuccessModalClose = () => {
    if (enteredPassword === password) {
      console.log('success');
      setPasswordMatch(true); // Reset password match status
      handleClose();
    } else {
      console.log('no');
      setPasswordMatch(false); // Set password match status to false
    }
    setLoginSuccessModalOpen(false);
    // Close login modal after successful login
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" onClick={handleLogin}>
              Register
            </Button>
            {!passwordMatch && <p className="error-message">Incorrect password. Please try again.</p>}
          </Form>
          {showPassword && (
            <div>
              <p>
                Your special password is:{' '}
                <strong onClick={handlePasswordClick} title="Click to copy">
                  {password}
                </strong>
              </p>
              {copied && <p className="copied">Password copied to clipboard!</p>}
            </div>
          )}
        </Modal.Body>
      </Modal>
      <Modal show={loginSuccessModalOpen} onHide={handleSuccessModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Enter Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Enter Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                autoFocus
                value={enteredPassword}
                onChange={(e) => setEnteredPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleSuccessModalClose}>
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LoginModal;
