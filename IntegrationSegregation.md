# Interface Segregation Principle

A client should never be forced to implement an interface that it doesn’t use, or clients shouldn’t be forced to depend on methods they do not use.

```javascript
class Entity {
  constructor(name, damage, health) {
    this.name = name;
    this.damage = damage;
    this.health = health;
  }

  move() {
    console.log(`${this.name} moved`);
  }

  attack(target) {
    console.log(
      `${this.name} attacked ${target} and took ${this.damage} damage`
    );
    target.takeDamage(this.damage);
  }

  takeDamage(amount) {
    this.health -= amount;
    console.log(`${this.name} has ${this.health} health remaining`);
  }
}

class Character extends Entity {}

class Wall extends Entity {
  constructor(name, health) {
    super(name, 0, health);
  }

  move() {
    return null;
  }

  attack() {
    return null;
  }
}

class Turret extends Entity {
  constructor(name, damage) {
    super(name, damage, -1);
  }

  move() {
    return null;
  }

  takeDamage() {
    return null;
  }
}

const turret = new Turret("Turret", 5);
const character = new Character("Character", 3, 100);
const wall = new Wall("Wall", 200);

turret.attack(character);
character.move();
character.attack(wall);
```

We have distrubted the methods to the objects and we are adding them to the classed based on the functionality

```javascript
class Entity {
  constructor(name) {
    this.name = name;
  }
}

const mover = {
  move() {
    console.log(`${this.name} moved`);
  },
};

const attacker = {
  attack(target) {
    console.log(
      `${this.name} attacked ${target} and took ${this.damage} damage`
    );
    target.takeDamage(this.damage);
  },
};

const hasHealth = {
  takeDamage(amount) {
    this.health -= amount;
    console.log(`${this.name} has ${this.health} health remaining`);
  },
};

class Character extends Entity {
  constructor(name, damage, health) {
    super(name);
    this.damage = damage;
    this.health = health;
  }
}

Object.assign(Character.prototype, mover);
Object.assign(Character.prototype, attacker);
Object.assign(Character.prototype, hasHealth);

class Wall extends Entity {
  constructor(name, health) {
    super(name);
    this.health = health;
  }
}

Object.assign(Wall.prototype, hasHealth);

class Turret extends Entity {
  constructor(name, damage) {
    super(name);
    this.damage = damage;
  }
}

Object.assign(Character.prototype, attacker);

const turret = new Turret("Turret", 5);
const character = new Character("Character", 3, 100);
const wall = new Wall("Wall", 200);

turret.attack(character);
character.move();
character.attack(wall);
```
