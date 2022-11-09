//10-a.[ ] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em dois objetos separados. Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}.
let objetct1 =  {
    name: "João"
    }
let objetct2 = {
    name: "João"
}
console.log (objetct1.name===objetct2.name)
// 10-b.[ ]Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em um objeto. Ex: const object1 = {firstName:"João", seccondName:"Maria"}. João e João, imprime true. João e Maria, imprime false.
let objects = [
    {
        firstName: "Ricardo"
    },

    {
        secondName: "Carolina"
    }
]
console.log (objects[0].firstName===objects[1].secondName)