function addNickname(apelido) {

    if (apelido.length < 5) {
        return "Número mínimo de caracteres são 5"
    }

    let teste = apelido.toUpperCase()
    let i = 0
    
        if (apelido.toLowerCase() === apelido) {
            return "Formato inválido, ao menos uma letra maiúscula"
        }
   
    
    let listaNickName = ["Hassinho", "Begombass", "Hélio", "Lombael"]
    let j = 0
    while (j < listaNickName.lenght) {
        let conferirApelido = listaNickName[j]
        if (apelido === conferirApelido) {
            return "Nickname já cadastrado, tente outro"

        }
        j++
    }


    listaNickName.push(apelido)
    return "Nickname cadastrado com sucesso"
}



console.log(addNickname("Lombaelson"))
console.log(addNickname("Lombael"))
console.log(addNickname("lombael"))
console.log(addNickname("Lom45"))



// let apelido = "lomba"
// console.log(apelido[1])

// let x = "LOMBAEL"
// let y = x.toLowerCase()
// console.log(x)
// console.log(y)



