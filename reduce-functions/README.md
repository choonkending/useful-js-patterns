# Reduce

The following are excellent use cases for using `reduce`!

**createObjectFromKeyValue**
- it constructs an object based on { key: 'a', value: 'b' } within an array:
```javascript
const arrayWithKeyValueObjects = [ { key: 'a', value: 'b' }];

/*
 * obj = { a: b };
 */
const obj = createObjectFromKeyValue(arrayWithKeyValueObjects);
```

