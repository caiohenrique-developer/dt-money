import { HeaderProps } from '../../utils/dataTypes/components';

import appLogo from '../../assets/logo.svg';

import { Container, Content } from './styles';

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