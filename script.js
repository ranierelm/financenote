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