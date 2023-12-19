import React from 'react';
import {WalletChatWidget} from 'react-wallet-chat-v0'
import 'react-wallet-chat-v0/dist/index.css'

const Home = () => {
return (
	<div>
	<div>
	<h1>Welcome to WalletChat!</h1>
	</div>
	<WalletChatWidget />
	</div>
);
};

export default Home;

