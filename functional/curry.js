const createCurry = f => {
  const arity = f.length;
  const curry = (...theArgs) => {
    if (theArgs.length >= arity) return f.apply(null, theArgs);
    return (...nestedArgs) => {
      return curry.apply(null, [...theArgs, ...nestedArgs]);
    }
  };
  return curry;
};
