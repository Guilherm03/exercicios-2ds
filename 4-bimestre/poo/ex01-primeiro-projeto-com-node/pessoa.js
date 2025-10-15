function apresentarPessoa(nome, idade){
    return(`Meu nome é ${nome} e tenho ${idade} anos.`)
}

if (require.main === module) {
  const nome = "João"
  const idade = 16
  console.log(apresentarPessoa(nome, idade))
}

module.exports = apresentarPessoa