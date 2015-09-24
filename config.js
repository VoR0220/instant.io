exports.isProd = process.env.NODE_ENV === 'production'
exports.host = exports.isProd && 'localhost'
exports.ports = {
  http: exports.isProd ? 80 : 9100,
  https: exports.isProd ? 443 : 9101
}
