const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // devServer: {
  //   port:8081,
  //   proxy: {
  //     '/': {
  //       target: "http://192.168.33.40:8080/",
  //       ws: false,
  //       pathRewrite: {
  //         '^/': ''
  //       }
  //     }
  //   }
  // }
})
