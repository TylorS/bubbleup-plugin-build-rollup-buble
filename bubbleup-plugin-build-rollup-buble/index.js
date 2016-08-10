module.exports = {
  base: false,
  exec: function (rollupOptions, writeOptions) {
    const buble = require('rollup-plugin-buble')
    rollupOptions.plugins.push(buble())
  }
}
