const Modal = {
    open() {
        //Abrir modal - adicionar class Active
        document
        .querySelector('.modal-overlay')
        .classList.add('active')
    },
    close() {
        //Fechar modal - remover class Active
        document
        .querySelector('.modal-overlay')
        .classList.remove('active')
    }
}

//objeto
const transaction = [
    {
    id:1,
    description: 'Luz',
    amount: -50000,
    date: '17/02/2022'
    },
    {
    id:2,
    description: 'Website',
    amount: 500000,
    date: '17/02/2022'
    },
    {
    id:3,
    description: 'Internet',
    amount: -20000,
    date: '17/02/2022'
    },
]

//objeto Transaction
const Transaction = {
    incomes(){
        //entradas
    },
    expenses(){
        //saidas
    },
    total(){
        //entradas - saidas
    }
}