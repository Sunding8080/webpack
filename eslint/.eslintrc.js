module.exports = {
  root: true, // 停止在父级目录中寻找eslintrc
  extends: 'airbnb-base', // 使用airbnb规范
  rules: {
    'no-var': 0, // 要求使用let或const,而不是var
    'no-console': 'off', // 禁用console
  }
}