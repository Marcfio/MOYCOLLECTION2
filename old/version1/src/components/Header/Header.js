import React from 'react';
import './Header.css';
import logoUrl from './logo.svg';

const connectWallet = async () => {
  // Check if MetaMask is installed on user's browser
  if(window.ethereum) {
    ethereum.request({ method: 'eth_requestAccounts' });
   const accounts = await window.ethereum.request({ method: 'eth_accounts' });
   const chainId = await window.ethereum.request({ method: 'eth_chainId'});
   await console.log(accounts)
 } else {
   alert("Install metamask!!!!")

 }
}

function openlink (link){
  window.open(link, '_blank');
}

const discord_link = "https://discord.com";
const twitter_link = "";
const reddit_link = "";
const opensea_link = "";

const Header = () => (
  <div className="header">


    <button className = "metamaskbotton" onClick=    {connectWallet}> </button>

    <button className = "discordbotton"  > </button>

    <button className = "twitterbotton" > </button>

    <button className = "instagrambotton" > </button>

    <button className = "openseabotton" > </button>
  </div>

)
export default Header;
