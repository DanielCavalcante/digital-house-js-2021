let heroes = require('./heroes')

heroes.forEach(hero => { 
    //Template String
    //console.log(`Nome => ${hero.nome} \nRico => ${hero.rico}`)
    if (hero.nome == 'Mulher Maravilha') { //Negação
        console.log(`É mulher maravilha`)
    } else {
        console.log(`Nome => ${hero.nome} \nRico => Tá quebrado!`)
    }
})
