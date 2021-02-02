class person {
    constructor(name, softwareEngineer) {
        this.arms = 2;
        this.legs = 2;
        this.name = name;
        this.softwareEngineer = softwareEngineer;
        this.artists = []
    }
    ///this is a method
    greet() {
        console.log('Hello SEI-111');
    }
    //walk method
    walk() {
        console.log('Walking along the beach.')
    }
    // method with a parameter
    eat(food) {
        console.log(`Today, I am eating ${food}`)
    }
    //method working with arrays
    addArtist(artist) {
        console.log(`I likw ${artist}`);
        this.artists.push(artist);
    }
    sleep(hours) {
        console.log(`today, I slept ${hours}.`)
    }
}

// this is an instance of a class
// known as an object
// IMPORTANT: add the new keyword like so...
const princeLeo = new person('Leo Brooks', true);
const kingAmir = new person('Amir Harrison', true);

//print attributes
console.log(princeLeo.name)
console.log(kingAmir.name)

kingAmir.sleep(5);
princeLeo.walk();
princeLeo.eat('Dinosaur Chicken Nuggets');
princeLeo.jump = () => {
    console.log('Weeeee');
}

princeLeo.jump();
princeLeo.addArtist('Rico Nasty');
princeLeo.addArtist('Yeye')

console.log(princeLeo.artists);

kingAmir.walk();
