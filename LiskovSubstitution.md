# Liskov Substitution Principle

If S is a subtype of T, then objects of T may be replaced with objects of S (a child class can replace a parent class in terms of functionality)

```javascript
class Bird {
  fly() {
    console.log("I can fly");
  }
}

class Duck extends Bird {
  quack() {
    console.log("Quack");
  }
}

class Penguin extends Bird {
  fly() {
    throw new Error("Cannot Fly");
  }

  swim() {
    console.log("I can swim");
  }
}

function flyBird(bird) {
  bird.fly();
}

const duck = new Duck();
const penguin = new Penguin();

flyBird(duck);
flyBird(penguin);
```

Penguin cannot implement Liskov Substitution Principle as it can not Substitute a bird

```javascript
class FlyingBird {
  fly() {
    console.log("I can fly");
  }
}

class SwimmingBird {
  swim() {
    console.log("I can swim");
  }
}
class Duck extends FlyingBird {
  quack() {
    console.log("Quack");
  }
}

class Penguin extends SwimmingBird {}

function flyingBird(bird) {
  bird.fly();
}

function swimmingBird(bird) {
  bird.swim();
}

const duck = new Duck();
const penguin = new Penguin();

flyingBird(duck);
swimmingBird(penguin);
```

By this we can implement Liskov Substitution by Substituting each bird by its category
