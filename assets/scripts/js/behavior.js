function foo (monkey) {
  return monkey.time.analog;
}

var zen = {
  'time': {
    'analog': 'noon',
    'digital': '12:00'
  },
  'weather': 'sunny',
  'temp': 10
};

var bar = foo(zen);

console.log(bar);
