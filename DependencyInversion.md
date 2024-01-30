# Dependency Inversion Principle

Entities must depend on abstractions, not on concretions. It states that the high-level module must not depend on the low-level module, but they should depend on abstractions.

```javascript
class Store {
  constructor(user) {
    this.paypal = new Paypal();
    this.user = user;
    // this.stripe = new Stripe(user);
  }

  purchaseBike(quantity) {
    this.paypal.makePayment(this.user, 200 * quantity);
    // this.stripe.makePayment(200 * quantity * 100);
  }

  purchaseHelmet(quantity) {
    this.paypal.makePayment(this.user, 15 * quantity);
    // this.stripe.makePayment(15 * quantity * 100);
  }
}

class Stripe {
  constructor(user) {
    this.user = user;
  }

  makePayment(amount) {
    console.log(`${this.user} made payment of $${amount / 100} with stripe`);
  }
}

class Paypal {
  makePayment(user, amount) {
    console.log(`${user} made payment of $${amount} with paypal`);
  }
}

const store = new Store("John");
store.purchaseBike(2);
store.purchaseHelmet(1);
```

In the above code to change the payment way we need to make changes in the store which depends on stripe and paypal which violated dependency inversion.

```javascript
class Store {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }

  purchaseBike(quantity) {
    this.paymentProcessor.pay(200 * quantity);
  }

  purchaseHelmet(quantity) {
    this.paymentProcessor.pay(15 * quantity);
  }
}

class StripePaymentProcessor {
  constructor(user) {
    this.user = user;
    this.stripe = new Stripe(user);
  }

  pay(amount) {
    this.stripe.makePayment(amount * 100);
  }
}

class Stripe {
  constructor(user) {
    this.user = user;
  }

  makePayment(amount) {
    console.log(`${this.user} made payment of $${amount / 100} with stripe`);
  }
}

class Paypal {
  makePayment(user, amount) {
    console.log(`${user} made payment of $${amount} with paypal`);
  }
}

class PaypalPaymentProcessor {
  constructor(user) {
    this.user = user;
    this.paypal = new Paypal();
  }

  pay(amount) {
    this.paypal.makePayment(this.user, amount * 100);
  }
}

// const store = new Store(new StripePaymentProcessor("John"));
const store = new Store(new PaypalPaymentProcessor("John"));
store.purchaseBike(2);
store.purchaseHelmet(1);
```

Here we can change in between the payment ways by creating a abstract method above the classes and coupling with the store api
