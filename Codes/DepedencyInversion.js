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
