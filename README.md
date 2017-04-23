# Lesson 3 - Due May 1, 2017

## Assignment

You get a phonecall from a Pauline. She is a bourgeoning entrepreneur
that is looking to start a business doing her passion: baking pastries. She is
a skilled dessert chef, but has no idea how to build a website. This is where
you come in.

Pauline needs a website where she can advertise her business, give
details to her fine baked goods and also have customers order said goods!

You take the job on, for actual pay not "experience" or any gross stuff like that,
because she is a respectful client who pays you on time and thinks that you are
valuable. You in turn pay your designer friend, Racheal (at her going rate) and
then she comes up with this great mock-up that Pauline adores. Now it's
time for you to implement it.

We addressed most of this in class, but your goal is to put together the jsx file for
the basket design and to also hook up the "Add to Order" button on the pastry show
page.

## Getting Started

`cd app`

`npm i`

`npm start`

Visit <a href="http://localhost:3000">http://localhost:3000</a> for instructions.

To start, check out the already existing: <a href='/pastry'>/pastry page</a>

## Model Documentation

### Pastry

Has four attributes:

- `name`: `<String>` The name of the pastry
- `image`: `<String>` The URL of an image of the pastry
- `description`: `<String>` A description of the pastry
- `price`: `<Number>` The price, in cents, of the pastry

`Pastry` has a `constructor` that takes an object with the four attributes listed above:

`const pastry = new Pastry({name, image, description, price})`

`Pastry.prototype` has three methods on it

- `create`: saves a new pastry in the db. Takes no arguments. Returns a `<Promise<Pastry>>`. Example use: `pastry.create()`
- `update`: updates an existing pastry in the db. Takes an object as an argument with the attributes you'd set above `pastry.update({name, image, description, price})`. Returns a `<Promise<Pastry>>`
- `del`: deletes a pastry from the db. Takes no arguments. Returns `<Promise<{}>>`. Example use: `pastry.del()`

`Pastry` also has two static methods

- `all`: get all of the pastries in the db. Takes no arguments. Returns `<Promise<Array<Pastry>>>`. Example use: `Pastry.all()`
- `find`: get an instance of a specific pastry in the db. Takes one argument: `name` (`<String>`). Returns `<Promise<Pastry>>`. Example use: `Pastry.find(pastryName)`.

### Order

Has three static methods:

- `addPastry` - adds a pastry to the order. Takes `pastry` (`<Pastry>`). Returns `<Promise<Order[Pastry]>>`
- `removePastry` - removes a pastry from the order. Takes `pastryName` (`<String>`).  Returns `<Promise<Order[Pastry]>>`
- `getOrder` - retrieves order. Takes no arguments. Returns `<Promise<Object>>`, where the `Object` has two keys: `totalPrice` (`<Number>`) and `pastries` (`<Array<Pastry>>]`)
