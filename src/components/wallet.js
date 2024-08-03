import React from 'react';
import { useWeb3Modal } from '@web3modal/ethers/react';

const ConnectButton = () => {
  const { open } = useWeb3Modal();

  return (
    <div className="space-x-4">
      <button
        onClick={() => open()}
        className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
      >
        Connect Wallet
      </button>
      <button
        onClick={() => open({ view: 'Networks' })}
        className="bg-gradient-to-r from-blue-500 to-pink-500 text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
      >
        Switch Chain
      </button>
    </div>
  );
};

export default ConnectButton;
