# Plug'n'Play Webpack Node Externals

This is the pnp support version of `webpack-node-externals`. 


However, it does not provide additional options, such as including certain modules in the bundle with allowlist.

When using this package, all imports are not included in the bundle.

## Quick usage
```
$ yarn add pnp-node-externals --dev
```

In your webpack.config.js

```javascript
const pnpNodeExternals = require('pnp-node-externals')

module.exports = {
  // ...
  target: 'node',
  externals: [
    pnpNodeExternals(),
  ]
}
```

## Reference
- [`webpack-node-externals`](https://github.com/liady/webpack-node-externals)
