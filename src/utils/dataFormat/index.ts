export const { format: currencyFormat } = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});

export const dateFormat = new Intl.DateTimeFormat('pt-BR');