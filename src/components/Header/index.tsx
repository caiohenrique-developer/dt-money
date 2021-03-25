import appLogo from '../../assets/logo.svg'

import { Container, Content } from './styles'

export function Header() {
    return (
        <Container>
            <Content>
                <img src={appLogo} alt="DT Money logotipo"/>

                <button type="button">Nova transação</button>
            </Content>
        </Container>
    )
}