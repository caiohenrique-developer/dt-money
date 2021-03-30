import { FormEvent, useState } from "react";
import { api } from "../../services/api";

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
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');
    
    function handleCreateNewTransaction(ev: FormEvent) {
        ev.preventDefault();
        
        const data = { type, title, value, category };

        api.post('transactions', data);
    }
    
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
            
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>

                <input
                    placeholder="Título"
                    value={title}
                    onChange={(ev) => setTitle(ev.target.value)}
                />
                <input
                    type="number"
                    placeholder="Valor"
                    value={value}
                    onChange={(ev) => setValue(+ev.target.value)}
                />

                <TransactionTypeContainer>
                    <RadioButton
                        type="button"
                        isActive={type === 'deposit'}
                        colorActive="green"
                        onClick={() => setType('deposit')}
                    >
                        <img src={incomeIcon} alt="Ícone de entrada"/>
                        <span>Entrada</span>
                    </RadioButton>
                    
                    <RadioButton
                        type="button"
                        isActive={type === 'withdraw'}
                        colorActive="red"
                        onClick={() => setType('withdraw')}
                    >
                        <img src={outcomeIcon} alt="Ícone de saída"/>
                        <span>Saída</span>
                    </RadioButton>
                </TransactionTypeContainer>
                
                <input
                    placeholder="Categoria"
                    value={category}
                    onChange={(ev) => setCategory(ev.target.value)}
                />

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}