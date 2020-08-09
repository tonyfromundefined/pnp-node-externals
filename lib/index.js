const pnp = require('pnpapi')

const { packageLocation: topLevelLocation } = pnp.getPackageInformation(
  pnp.topLevel
)

module.exports = (options) => (context, request, callback) => {
  try {
    const resolution = pnp.resolveToUnqualified(request, context, {
      considerBuiltins: false,
    })
    if (path.relative(topLevelLocation, resolution).startsWith('.yarn')) {
      return callback(null, request, 'commonjs2')
    }
  } catch {}
  callback()
}
