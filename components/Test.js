const [authMessage, setAuthMessage] = useState('');

const isValidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
};  

const handleSubmit = (e) => {
  e.preventDefault();

  // Simulate an authentication check
  if (loginFormData.email === 'user@example.com' && loginFormData.password === 'password') {
    // Successful authentication, reset errors and display success message
    setErrors({});
    setAuthMessage('');
    console.log('Authentication successful:', loginFormData);
  } else {
    // Failed authentication, show error message
    setAuthMessage('Email or password does not match records.');
  }
};
