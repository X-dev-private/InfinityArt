// src/config/web3ModalConfig.js
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react';

// 1. Your WalletConnect Cloud project ID from .env
const projectId = process.env.REACT_APP_WALLETCONNECT_PROJECT_ID;

// 2. Set chains
const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
};

// 3. Create a metadata object
const metadata = {
  name: 'InfinityArt',
  description: 'AppKit Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
};

// 4. Create Ethers config
const ethersConfig = defaultConfig({
  metadata,
  enableEIP6963: true,
  enableInjected: true,
  enableCoinbase: true,
  rpcUrl: '...', 
  defaultChainId: 1,
});

// 5. Create a Web3Modal instance
export const initializeWeb3Modal = () => createWeb3Modal({
  ethersConfig,
  chains: [mainnet],
  projectId,
  enableAnalytics: true
});
