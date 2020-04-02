module.exports = {
  "plugins": [
    ["import", {
      "libraryName": "antd",
      "libraryDirectory": "es",
      "style": "css"
    }, "import-antd"],
    '@babel/plugin-proposal-class-properties'
  ],
  "presets": [
    "@babel/preset-react",
    "@babel/preset-env"
  ]
}
