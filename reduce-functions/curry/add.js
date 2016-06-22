var add = (...args) => {
  var sum = args.reduce((a, b) => a + b);
  var fn = (...args) => add(sum, ...args);
  fn.valueOf = () => sum;
  return fn;
};
