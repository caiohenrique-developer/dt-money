import incomeIcon from '../../assets/income.svg'
import outcomeIcon from '../../assets/outcome.svg'
import totalIcon from '../../assets/total.svg'

import { Container } from "./styles";

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeIcon} alt="Ícone de entradas"/>
                </header>
                <strong>R$ 1000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeIcon} alt="Ícone de saídas"/>
                </header>
                <strong>- R$ 500,00</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalIcon} alt="Ícone de total"/>
                </header>
                <strong>R$ 500,00</strong>
            </div>
        </Container>
    )
}