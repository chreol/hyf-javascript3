// here we are
class Character {
    constructor(name, lifePoints, weapon){
        this.name = name;
        this.lifePoints = lifePoints;
        this.weapon = weapon;
    }
    // name
    // lifePoints
    // weapon
    //level

    attack(target){
        // console.log('paw paw -->');
        target.getHit();
    }
    //attack()
    // setters
    getHit(){
        this.lifePoints -= 2;
        console.log(this.name + ' looses life:' + this.lifePoints);
    }
    // getter
    displayStats(){
        let stats = `${this.name} <br>Life: ${this.lifePoints} <br>weapon: ${this.weapon}`;
        console.log(stats);
    }
}
class Player extends Character{
    constructor(name, lifePoints, occupation){
        super(name, lifePoints, 'flowers');
        this.occupation = occupation;
    }
    pickObject(object){
        this.weapon = object;
        this.displayStats();
    }
}

class Goblin extends Character{
    constructor(name, lifePoints){
        super(name, lifePoints, 'socks');
    }
    growl(){
        let message = 'the goblin graaaawls';
        console.log(message);
    }
    selectAction(target){
        let rand = Math.floor(Math.random()*2);
        if (rand > 0){
            this.attack(target);
            } else {
                this.growl();
            }
           
    }
}

let playerName = prompt('Enter the name of you doomed character');
let player = new Player(playerName, 25, 'gardener');
let goblin = new Goblin('enemy',10,'baggs');
let turn = 0;

function gameLoop(){
    if(turn ===1){
        goblin.selectAction();
        goblin.attack(player);
        changeTurn();
    }
    setTimeout(gameLoop, 3000);
}

gameLoop();

function changeTurn(){
    if (turn == 0){
        turn = 1;
    } else {
        turn =0;
    }
}