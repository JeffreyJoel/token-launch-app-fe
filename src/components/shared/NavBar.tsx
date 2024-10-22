import React from 'react';
import WalletConnect from '../WalletConnect';

const NavBar: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 right-0 flex items-center justify-between py-2 px-5 text-primary-foreground shadow-md z-10">
        <h1 className="text-lg font-bold text-white">Mint Dex</h1>
        <div>
            <WalletConnect/>
        </div>
      </header>
    );
};

export default NavBar;