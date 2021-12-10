let player1 = {
    names: "Alex",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/liukang.gif",
    weapon: ['knife', 'katana'],
    attack: () => {
        console.log("Attacking" + names);
    }
}


let player2 = {
    names: "Alexander",
    hp: 10,
    img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
    weapon: ['stone', 'daggers'],
    attack: () => {
        console.log("Attacking" + names)
    }
}

function createPlayer(playerRole, player1 ){
    const $arena = document.querySelector('.arenas')
    const $player1 = document.createElement('div')
    $player1.classList.add(playerRole);
    const $progressBar = document.createElement('div')
    $progressBar.classList.add('progressBar')
    const $character = document.createElement('div')
    $character.classList.add('character')
    const $life = document.createElement('div')
    $life.classList.add('hp')
    $life.innerHTML = player1.hp
    const $name = document.createElement('div')
    $name.classList.add('name')
    $name.innerHTML = player1.names
    const $img = document.createElement('img')
    $img.classList.add('img')
    $img.src = player1.img



    $progressBar.appendChild($life)
    $progressBar.appendChild($name)

    $character.appendChild($img)
    
    $player1.appendChild($progressBar)
    $player1.appendChild($character)

    $arena.appendChild($player1)



}

createPlayer("player1", player1)
createPlayer("player2", player2)

