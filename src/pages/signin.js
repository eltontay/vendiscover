import React, { useState } from 'react';
import SignIn from '../components/SignIn';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function SigninPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <SignIn />
    </>
  );
}

export default SigninPage;
