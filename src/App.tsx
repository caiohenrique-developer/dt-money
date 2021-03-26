import Modal from 'react-modal';

import { useState } from 'react';
import { Header } from "./components/Header";
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

      <Modal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
      >
          <h2>Este é meu modal</h2>
      </Modal>

      <Dashboard />
      <GlobalStyles />
    </>
  );
}