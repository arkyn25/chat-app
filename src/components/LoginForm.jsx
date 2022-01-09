import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSumit = async (event) => {
    event.preventDefault();

    const authObject = { 'Project-ID': "a6d63d2a-3fe6-4a03-8a5a-684007358c7b", 'User-Name': username, 'User-Secret': password }

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();

    } catch(error) {
      setError('Username invalid, try again!')
    }
  }

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">TryB-X Chat</h1>
        <form onSubmit={handleSumit} >
          <input 
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="UserName" required />
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password" required 
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Start Chatting</span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  )
}

export default LoginForm;