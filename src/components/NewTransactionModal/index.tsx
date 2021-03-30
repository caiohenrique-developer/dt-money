import { useState } from "react";

import Modal from "react-modal";
import closeIcon from '../../assets/close.svg';
import incomeIcon from '../../assets/income.svg';
import outcomeIcon from '../../assets/outcome.svg';

import { Container, TransactionTypeContainer, RadioButton } from "./styles";

interface ModalProps {
    isOpen: boolean;
    onRequestClose(): void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: ModalProps) {
    const [type, setType] = useState('deposit');
    
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
                    <RadioButton
                        type="button"
                        isActive={type === 'deposit'}
                        onClick={() => setType('deposit')}
                    >
                        <img src={incomeIcon} alt="Ícone de entrada"/>
                        <span>Entrada</span>
                    </RadioButton>
                    
                    <RadioButton
                        type="button"
                        isActive={type === 'withdraw'}
                        onClick={() => setType('withdraw')}
                    >
                        <img src={outcomeIcon} alt="Ícone de saída"/>
                        <span>Saída</span>
                    </RadioButton>
                </TransactionTypeContainer>
                
                <input placeholder="Categoria" />

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}