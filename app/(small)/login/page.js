import LoginForm from '@/components/LoginForm';
import React from 'react';
import RootLayout from './layout';

const Login = () => {
  return (
    <div>
      <RootLayout>
      <LoginForm />
      </RootLayout>
    </div>
  );
};

export default Login;