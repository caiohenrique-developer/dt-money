import Modal from "react-modal";
import closeIcon from '../../assets/close.svg';

import { Container } from "./styles";

interface ModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
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
                <input placeholder="Categoria" />

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}