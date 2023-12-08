import React, { useState } from 'react';
import pb from '../lib/pocketbase'; // Ensure this is the correct path
import { useWallet } from '../components/WalletContext'

const Wallet = () => {
    const [amount, setAmount] = useState(0);

    const { updateWallet } = useWallet();

    const handleAddCurrency = async (e) => {
        e.preventDefault();

        try {
            const userId = pb.authStore.model.id;
            const userRecord = await pb.collection('users').getOne(userId);
            const currentWallet = userRecord.wallet;
            console.log('Current currency:', currentWallet);

            const updatedWallet = (userRecord.wallet || 0) + parseInt(amount);
            console.log('Amount being added:', amount); 
            console.log('Updated currency:', updatedWallet);

            await pb.collection('users').update(userId, { wallet: updatedWallet });
            const updatedUserRecord = await pb.collection('users').getOne(userId);
            console.log('Currency after update:', updatedUserRecord.wallet);
            updateWallet(updatedWallet);
            setAmount(0);
            alert("Currency added successfully!");
        } catch (error) {
            console.error("Error adding currency", error);
            alert("Failed to add currency");
        }
    };

    return (
        <div className="wallet-container">
            <form onSubmit={handleAddCurrency}>
                <label htmlFor="amount">Amount:</label>
                <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <button type="submit">Add Currency</button>
            </form>
        </div>
    );
};

export default Wallet;
