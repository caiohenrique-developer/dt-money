import Modal from "react-modal";
import closeIcon from '../../assets/close.svg';
import incomeIcon from '../../assets/income.svg';
import outcomeIcon from '../../assets/outcome.svg';

import { Container, TransactionTypeContainer } from "./styles";

interface ModalProps {
    isOpen: boolean;
    onRequestClose(): void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: ModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                className="react-close-icon"
                onClick={onRequestClose}
            >
                <img src={closeIcon} alt="Ícone para fechar modal"/>
            </button>
            
            <Container>
                <h2>Cadastrar transação</h2>

                <input placeholder="Título" />
                <input placeholder="Valor" type="number" />

                <TransactionTypeContainer>
                    <button type="button">
                        <img src={incomeIcon} alt="Ícone de entrada"/>
                        <span>Entrada</span>
                    </button>
                    
                    <button type="button">
                        <img src={outcomeIcon} alt="Ícone de saída"/>
                        <span>Saída</span>
                    </button>
                </TransactionTypeContainer>
                
                <input placeholder="Categoria" />

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}