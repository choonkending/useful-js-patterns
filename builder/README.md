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

Each Instance returns some form of `builder` object. It isn’t until you call `build` on this that you get back a fully fledged object.
