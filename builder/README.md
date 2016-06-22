When your `constructor` method becomes too long

```javascript
new Component(var1, var2, var3, var4)
```

it becomes harder to reason about what the factory function does.

You could instead use the builder method:

```javascript
Component.doThis(var1)
          .doThat(var2)
          .doThisAndThat(var3);

```

http://www.thekua.com/atwork/2013/04/a-builder-pattern-implementation-in-javascript/
