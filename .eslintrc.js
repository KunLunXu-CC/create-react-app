module.exports = {
  parser: 'babel-eslint',
  // 开发环境设置: 在使用下拉环境中的全局变量时不会因为未定义变量而报错, 如 window
  env: {
    browser: true,          
    node: true     
  },

  // 定义全局变量, 在直接使用下列全局变量情况下不会因为未定义变量而报错
  globals: {
    _: true,
    lodash: true,
  },

  // 插件列表
  plugins: [
    'react',
    'import',
    'react-hooks',
  ],

  // 继承的规则
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],

  // 自定义规则列表  
  rules: {
    // 强制在每个语句后面使用分号
    "semi": [1, "always"], 
  }
}