function apresentarPessoa(nome, idade){
    return(`Meu nome é ${nome} e tenho ${idade} anos.`)
}

const joao = (apresentarPessoa("João", 16))
console.log(joao)

module.exports = apresentarPessoa