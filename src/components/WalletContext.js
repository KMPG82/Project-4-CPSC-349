import React, { createContext, useState, useContext } from 'react';

const WalletContext = createContext();

export const useWallet = () => useContext(WalletContext);

export const WalletProvider = ({ children }) => {
    const [wallet, setWallet] = useState(0);

    const updateWallet = (newBalance) => {
        setWallet(newBalance);
    };

    return (
        <WalletContext.Provider value={{ wallet, updateWallet }}>
            {children}
        </WalletContext.Provider>
    );
};
