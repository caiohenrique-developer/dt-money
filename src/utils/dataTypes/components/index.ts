// Header
export interface HeaderProps { onNewTransactionModal: () => void; }

// NewTransactionModal
export interface ModalProps {
    isOpen: boolean;
    onRequestClose(): void;
}