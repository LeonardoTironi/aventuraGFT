class Hero{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        tipo==="mago"? this.ataque="usou magia":
        tipo==="guerreiro" ? this.ataque="usou espada":
        tipo==="monge" ? this.ataque="usou artes marciais":
        this.ataque="usou shuriken";
    }
    atacar(){
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
    }
}
let pessoa1 = new Hero("Vladimir", 500, "mago")
pessoa1.atacar()
