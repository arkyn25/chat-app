import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

export default function App() {
  if(!localStorage.getItem('username')) return <LoginForm />

	return (
		<ChatEngine
			height='100vh'
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			projectID='a6d63d2a-3fe6-4a03-8a5a-684007358c7b'
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
		/>
	);
}