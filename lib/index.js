const pnp = require('pnpapi')

const { packageLocation } = pnp.getPackageInformation(pnp.topLevel)

module.exports = function pnpNodeExternals(options) {
  return function filter(context, request, callback) {
    try {
      const resolution = pnp.resolveToUnqualified(request, context, {
        considerBuiltins: false,
      })
      if (path.relative(packageLocation, resolution).startsWith('.yarn')) {
        return callback(null, request, 'commonjs2')
      }
    } catch {}

    callback()
  }
}
