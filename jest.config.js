module.exports = {
  coverageDirectory: 'coverage',
  // 转义
  transform: {
    // '^.+\\.vue$': 'vue-jest',
    '^.+\\js$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg)$': 'jest-transform-stub', // 静态资源
    '^.+\\.(t|j)sx?$': 'ts-jest'
  },
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx']
}
