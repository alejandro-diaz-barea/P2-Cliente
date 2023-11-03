// const a = 'Mi valor'

//   [1, 2, 3].forEach(console.log)

const bar = 'bar'
let foo = 'baz'

const bazzz = 'baaarrr',
  fooos = 'baaam'

function hello(world) {
  let greeting = 'Hello '

  if (world)
    greeting += world
  else
    greeting += 'world'

  return greeting
}

// Esto es equivalente a escribir

const bar = 'bar';
let foo = 'baz';

const bazzz = 'baaarrr';
const fooos = 'baaam';

function hello(world) {
  let greeting = 'Hello ';

  if (world) {
    greeting += world;
  }
  else {
    greeting += 'world';
  }

  return greeting;
}