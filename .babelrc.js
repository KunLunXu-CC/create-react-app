module.exports = {
  'plugins': [
    ['import', {
      'libraryName': 'antd',
      'libraryDirectory': 'es',
      'style': 'css'
    }, 'import-antd'],
  ],
  'presets': [
    '@babel/preset-react',
    '@babel/preset-env'
  ]
}
