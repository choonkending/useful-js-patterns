// to partially apply functions

const bind = (f, value) => (...x) => f(value, ...x);
