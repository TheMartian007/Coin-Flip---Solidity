import React, { useState } from "react";
import { ethers } from "ethers";

function MyDApp() {
  const [walletAddress, setWalletAddress] = useState("");
  const [isConnected, setIsConnected] = useState(false);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        setIsConnected(true);
      } catch (error) {
        console.error("Failed to connect wallet", error);
      }
    } else {
      alert("install MetaMask!");
    }
  };

  const handleButtonClick = () => {
    // Smart Contract button linking
    console.log("Button clicked");
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "400px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h1>Flip A Coin</h1>
      {!isConnected ? (
        <button
          onClick={connectWallet}
          style={{ padding: "10px 20px", fontSize: "16px" }}
        >
          Connect Wallet
        </button>
      ) : (
        <div>
          <p>Connected: {walletAddress}</p>
          <button
            onClick={handleButtonClick}
            style={{ padding: "10px 20px", fontSize: "16px" }}
          >
            Start Game
          </button>
        </div>
      )}
    </div>
  );
}

export default MyDApp;
