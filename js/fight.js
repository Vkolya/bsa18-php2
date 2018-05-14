function fight(fighter, improvedFighter, ...point) {
    
    let battle = (fighter, improvedFighter, pointIndex) => {
	if ((pointIndex%2) == 0){
		fighter.hit(improvedFighter, point[pointIndex]);
        } else {
            	improvedFighter.doubleHit(fighter, point[pointIndex]);
        }	
    }
	
    
    for (i = 0; i < point.length; i++){
	    if (fighter.health > 0 && improvedFighter.health > 0){
            	battle(fighter, improvedFighter, i);
	    }
    }
    

    if (fighter.health <= 0){
        console.log(`${improvedFighter.name} won`);
    } else if (improvedFighter.health <= 0) {
        console.log(`${fighter.name} won`);
    } else {
        console.log(`Draw`);
    }
    
}
