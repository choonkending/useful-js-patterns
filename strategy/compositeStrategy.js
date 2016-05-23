const compositeStrategy = (predicate, subStrategy) => (props) => {
  return predicate(props) ? subStrategy.map(fn => fn(props))
                                  .find(el => el !== null) : null;
}


const onlyADefault = ({ a, b }) => {
  if (a !== '1') return 'Only A';
  return null;
};

const onlyAEqualOne = ({ a, b }) => {
  if (a === '1') return 'Only A 1';
  return null;
}

const onlyBDefault = ({ a, b}) => {
  if (b !== '2') return 'Only B';
  return null;
};

const onlyBEqualTwo = ({ a, b }) => {
  if (b === '2') return 'Only B 2';
  return null;
};

const aAndB = ({ a, b }) => {
  if (a && b) return 'A & B';
  return null;
};

const empty = ({a, b}) => {
  if (!a && !b) return 'Default';
  return null;
}

const onlyA = compositeStrategy(({a, b}) => (a && !b), [onlyADefault, onlyAEqualOne]);
const onlyB = compositeStrategy(({a, b}) => (!a && b), [onlyBDefault, onlyBEqualTwo]);

const allStrategies = compositeStrategy(({a, b}) => true,
[
  onlyA,
  onlyB,
  aAndB,
  empty
]);

const exampleProps = {
  a: 'a',
  b: 'b'
};

const result = allStrategies(exampleProps);
console.log(result);
