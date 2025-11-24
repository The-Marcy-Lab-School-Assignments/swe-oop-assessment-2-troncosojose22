# Section 2 — Short Response

Write your responses directly in this file. Follow markdown formatting guidelines. Check the rubric.md file to see how your short responses will be graded.

As a quick guide, check the following before submitting:

- [] Answered all parts of every question
- [] No typos or grammar mistakes (use grammarly!)
- [] Accurately uses relevant technical terminology
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Responses are concise and easy to comprehend

---

## Question 1

In your own words, explain what does _encapsulation_ refer to? Why is this concept beneficial when programming?

Provide a code snippet to illustrate _encapsulation_.

## Response 1

**Encapsulation** allows us to bundle **data** and **methods** into a single unit. Making it easier to keep related data together.

It also gives us the ability to restrict access to certain information inside your **program** that is better to keep private, in order to maintain _consistency_ and _predictability_.

This is an important concept because we can achieve **separation of concerns** through encapsulation, also **code** that is consistent and predictable is less likely to crash our program. An example of encapsulation would look like the following:

```js
class SocialMedia {
  #friends = [];

  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getFriends() {
    return [...this.#friends];
  }
}
```

---

## Question 2

Explain what the `this` keyword is. Why is the `this` keyword useful?

In the code snippet below, what does `this` refer to?

```js
class Counter {
  constructor() {
    this.count = 0;
  }
  increment() {
    this.count++;
  }
}

const counterA = new Counter();
const counterB = new Counter();

counterA.increment();
counterA.increment();
counterA.increment();

counterB.increment();

console.log(counterA.count);
console.log(counterB.count);
```

## Response 2

The `this` keyword refers to the current "context" where it's being used, when part of a **method** being **invoked** on an **object**, it refers to the object that is invoking the method. The `this` keyword is useful because it allows us have multiple objects share the same functionality without having to write the same **code** multiple times.

In the code shown above every time the `increment()` method is invoked on the **instance** `counterA`, the `this` keyword is referring to the object invoking this method, so it refers to `counterA`. When `increment()` is invoked by the `counterB` instance the `this` keyword will refer to the `counterB` object instead. When we `console.log()` the `count` properties on both instances we will see the numbers 3 and 1, since the `count` property references the instance that it belongs to, thanks to the `this` keyword.

---

## Question 3

In your own words, explain what **polymorphism** means in OOP. Provide an example in code that demonstrates polymorphism.

## Response 3

In **OOP** **polymorphism** allows different types of **objects** to be treated in the same way as long as they share the same **interface**, allowing them to implement their **methods** differently.

An example of polymorphism would look like this:

```js
class Animal {
  constructor(name, age, energy) {
    this.name = name;
    this.age = age;
    this.energy = energy;
  }

  makeNoise() {
    return "animal noise";
  }
}

class Dog extends Animal {
  constructor(name, age, energy) {
    super(name, age, energy);
  }

  makeNoise() {
    return "woof woof";
  }
}

class Cat extends Animal {
  constructor(name, age, energy) {
    super(name, age, energy);
  }

  makeNoise() {
    return "meow meow";
  }
}
```

---

## Question 4

You're building a game where players can raise different digital pets: Cats, Dogs, and Birds. All pets have have a `name`, `energy` level, and `happiness` level and can all `sleep`. Cats have the ability to `hunt`, dogs have the ability to `chase`, and birds have the ability to `fly`.

**Part A:** Describe in words how you would use inheritance to organize these classes.

**Part B:** Explain one advantage of using inheritance here instead of creating three completely separate classes.

## Response 4

I would create a **parent class** called `Animal` for all my animals. Then all my animals in the game would **extend** the `Animal` class, allowing them to inherit the constructor, then I would create the methods `hunt`, `chase` and `fly` inside of their corresponding **child class**.

Using **inheritance** here allows us to write less code and makes it so all my animals share the same interface.
