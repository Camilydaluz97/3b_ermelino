// FUNÇÕES NOMEADAS
function logar(usuario, senha) {
    alert('Logado com a função nomeada!')
    alert('Olá, ' + usuario)
}

logar("camily123", 12345)



// FUNÇÕES ANÔNIMAS
const conectar = function (usuario, senha) {
    alert('Logado com a função anônima!')
    alert('Olá, ' + usuario)
}
conectar("Carla", "1789fds")


//ARROW FUNCTION OU FUNÇÕES FLECHA
const colorir = () => {
    alert("Função flecha em ação!")
}
colorir() // execução da Arrow