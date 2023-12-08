import React from 'react';
import Wallet from '../components/Wallet';
import Layout from '../components/Layout';
// Import any additional components you might need

const WalletPage = () => {
    return (
        <Layout>
            <div className="wallet-page">
                <h1>My Wallet</h1>
                    <Wallet />
                </div>
        </Layout>
        
    );
};

export default WalletPage;
