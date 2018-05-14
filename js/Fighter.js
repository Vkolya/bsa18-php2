class Fighter {

    constructor(name, power, health = 100) {
        this.name = name;
        this.power = power;
        this.health = health;
    }

    setDamage(damage) {
        this.health -= damage;
    }

    hit(enemy, point){
        let damage = point * this.power;
        enemy.setDamage(damage);
    }
    
}