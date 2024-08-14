//Part One // Humble Begginnings //
console.log("-----------Part 1 Starts------------")

    const adventurer = {
        name: "Robin",
        health: 10,
        inventory: ["sword", "potion", "artifact"]
    }

    function inventoryLog(){
        adventurer.inventory.forEach ((item) => { console.log(item) })
    }
    inventoryLog();

    adventurer.companion = {
        name :"Leo",
        type :"cat"
    }
    adventurer.companion.companion = {
        name : "Frank",
        type : "Flea",
        belongings : ["small hat","sunglasses"]
    }
    function inventoryLog1(){
        adventurer.companion.companion.belongings.forEach ((item) => { console.log(item) })
    }
    inventoryLog1();

    adventurer.roll = function (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        }

console.log(adventurer);
adventurer.roll();
adventurer.roll();
adventurer.roll();
console.log("-----------Part 1 Ends------------")
//What if we had many adventurers? As you can imagine, 
//creating several of these objects manually would be time consuming, inefficient, and prone to errors. 
//Next, we will level up our approach using Classes.

//Part 2 Class Fantasy //
console.log("-----------Part 2 Starts------------")

class Character {
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
  }

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];
console.log(robin);
robin.roll();
robin.companion.roll();
robin.companion.companion.roll();
console.log("-----------Part 2 Ends------------")
//While progress has been made, this is still not the most efficient way to create these objects. 
//In order to effectively create companions, we need to extend the Character class for added specificity.


// Part 3: Class Features
  class Adventurer extends Character {
    constructor(name, role) {
      super(name);
      this.role = role; // Specialized role (e.g., Ranger, Mage)
      this.level = 1; // Initial level
      this.inventory.push("bedroll", "50 gold coins");
    }
    scout() {
      console.log(`${this.name} is scouting ahead...`);
      this.roll(); // Use inherited roll method
    }
    attack(target) {
      console.log(`${this.name} attacks ${target.name}!`);
    }
    levelUp() {
      this.level++;
      console.log(`${this.name} has leveled up to level ${this.level}!`);
    }  
  }

class Companion extends Character {
    constructor(name, type) {
      super(name);
      this.type = type; // Type of companion (e.g., Pet, Ally)
      this.affection = 100; // Represents loyalty or happiness
    }
    assist() {
      console.log(`${this.name} is assisting...`);
    }
    boostMorale() {
      console.log(`${this.name} boosts morale!`);
    }
    heal(amount) {
      this.health += amount;
      if (this.health > 100) this.health = 100;
      console.log(`${this.name} has been healed. Current health: ${this.health}`);
    }
  }

// Example usage:
console.log("-----------Part 3 Starts------------")
// Create Robin as an Adventurer
const robin1 = new Adventurer("Robin", "Ranger");
// Create companions
const leo = new Companion("Leo", "Cat");
const frank = new Companion("Frank", "Flea");
// Add inventory items
robin1.inventory.push("sword", "potion", "artifact");
frank.inventory.push("small hat", "sunglasses");
// Display initial state
console.log(robin1);
console.log(leo);
console.log(frank);
// Test methods
robin1.scout();
leo.assist();
frank.boostMorale();
console.log("-----------Part 3 Ends------------")


//Part 4 Part 4: Class Uniforms

class Character1 {
    static MAX_HEALTH = 100;
    constructor (name) {
      this.name = name;
      this.inventory = [];
      this.health = Character1.MAX_HEALTH; // Use static property
    }
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
  }

  class Adventurer1 extends Character1 {
    static ROLES = ["Fighter", "Healer", "Wizard", "Rogue"];
    constructor(name, role) {
      super(name);
      this.role = role; // Specialized role (e.g., Ranger, Mage)
      this.level = 1; // Initial level
      this.inventory.push("bedroll", "50 gold coins");
      if (!Adventurer1.ROLES.includes(role)) {
             throw new Error(`Invalid role: ${role}. Valid roles are: ${Adventurer1.ROLES.join(", ")}`);
             }
    }
    scout() {
      console.log(`${this.name} is scouting ahead...`);
      this.roll(); // Use inherited roll method
    }
    attack(target) {
      console.log(`${this.name} attacks ${target.name}!`);
    }
    levelUp() {
      this.level++;
      console.log(`${this.name} has leveled up to level ${this.level}!`);
    }  
    static getRoles() {
        return Adventurer1.ROLES;
      }
  }

console.log("-----------Part 4 Starts------------")
// Output the MAX_HEALTH from the Character class
console.log(`Max Health for all characters: ${Character1.MAX_HEALTH}`);
// Use the static method getRoles
console.log(Adventurer1.getRoles()); // Output: [ 'Fighter', 'Healer', 'Wizard' ]
console.log("-----------Part 4 Ends------------")

