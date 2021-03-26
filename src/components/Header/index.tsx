import appLogo from '../../assets/logo.svg';

import { Container, Content } from './styles';

interface HeaderProps { onNewTransactionModal: () => void; }

export function Header({ onNewTransactionModal }: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={appLogo} alt="DT Money logotipo"/>

                <button
                    type="button"
                    onClick={onNewTransactionModal}
                >Nova transação</button>
            </Content>
        </Container>
    )
}