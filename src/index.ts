import { ExternalsFunctionElement } from 'webpack'
import path from 'path'

const pnp = require('pnpapi')

const { packageLocation } = pnp.getPackageInformation(pnp.topLevel)

export = function pnpNodeExternals(options?: {}): ExternalsFunctionElement {
  return function filter({ context, request }, callback) {
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
