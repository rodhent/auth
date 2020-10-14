import React from 'react';

import './App.css';
import LoginBtn from './components/LoginBtn.jsx'
import LogoutBtn from './components/LogoutBtn';
import Profile from './components/Profile.jsx'
import {useAuth0} from '@auth0/auth0-react'

function App() {
  const {isLoading} = useAuth0()

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      <LoginBtn />
      <LogoutBtn />
      <Profile />
    </div>
  );
}

export default App;
