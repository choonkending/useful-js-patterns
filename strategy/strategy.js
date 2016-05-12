const aAndB = ({ a, b }) => {
  if (a && b) return 'A & B';
  return null;
};

const onlyA = ({ a, b }) => {
  if (a && !b) return 'Only A';
  return null;
};

const onlyB = ({ a, b}) => {
  if (!a && b) return 'Only B';
  return null;
};

const empty = ({a, b}) => {
  if (!a && !b) return 'Default';
  return null;
}

const exampleProps = {
  a: 'a',
  b: 'b'
};

const strategies = [aAndB, onlyA, onlyB, empty];

/*
 * You should probably use Array.prototype.find() instead of filter
 * - not fully supported by native browsers and I believe requires a babel-polyfill
 * - unless it's a large dataset, having (N-1) times in filter is fine for me.
 */
const result = strategies.map(fn => fn(exampleProps)).filter(el => el !== null)[0];

