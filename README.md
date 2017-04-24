# Lesson 3 - Due May 8, 2017

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

### Goals

Take what was learned in class and in Lesson 2 and use it to create a new page
from scratch.

### Objectives

1. Fill in the appropriate routes to manage the order page. This includes a route to
add a pastry to an order (think POST `/orders/pastries`), to remove a pastry from an order
DELETE `/orders/pastries/:pastryName`, and to clear the order all together. BIG HINT:
You'll need to add the route to the app.js file to make this work. In there, you'll
see how pastries is lined up. Follow that example.

2. Build the order page. You can do this without any styles if you'd like. I can help
fill those in (and will do exactly that).

3. On the order page, I should be able to see the current order. This order will go away
when you restart your server, as we're not persisting the data yet (that comes later).


### Reminder:

This is not a React assignment. There is no front end JavaScript happening here. This
is an assignment to get you used to JSX components and to test your understanding of
how your route files work with Express. This means there are no front end event listeners
or any need to bind events to click, etc.

## Getting Started

`cd app`

`npm i`

`npm start`

Visit <a href="http://localhost:3000">http://localhost:3000</a> for instructions.

To start, check out the already existing: <a href='/pastries'>/pastry page</a>


## Helpful Resources

- [https://www.codecademy.com/courses/react-101/lessons/react-jsx-intro/exercises/render-jsx?action=lesson_resume](https://www.codecademy.com/courses/react-101/lessons/react-jsx-intro/exercises/render-jsx?action=lesson_resume)
- [The expressjs api](http://expressjs.com/en/4x/api.html)
- [HTTP Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- [HTTP Status Codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
- [Introduction to JSX](https://facebook.github.io/react/docs/introducing-jsx.html)
- [JSX in Depth](https://facebook.github.io/react/docs/jsx-in-depth.html)

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
