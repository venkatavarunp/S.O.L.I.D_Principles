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
