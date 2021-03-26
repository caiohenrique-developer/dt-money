import Modal from 'react-modal';

import { useState } from 'react';
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { Dashboard } from "./components/Dashboard";
import { GlobalStyles } from "./styles/globals";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() { setIsNewTransactionModalOpen(true); }

  function handleCloseNewTransactionModal() { setIsNewTransactionModalOpen(false); }
  
  return (
    <>
      <Header onNewTransactionModal={handleOpenNewTransactionModal} />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
      <Dashboard />

      <GlobalStyles />
    </>
  );
}