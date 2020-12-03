module.exports = {
  verbose: true,
  moduleFileExtensions: ['js', 'jsx'],
  setupFilesAfterEnv: ['<rootDir>/src/config/testSetup.js'],
  moduleNameMapper: {
    '^app(.*)': '<rootDir>/src/app$1',
    '^components(.*)': '<rootDir>/src/common/components$1',
    '^containers(.*)': '<rootDir>/src/common/containers$1',
    '^layouts(.*)': '<rootDir>/src/common/layouts$1',
    '^assets(.*)': '<rootDir>/src/assets$1',
    '^config(.*)': '<rootDir>/src/config$1',
    '^redux(.*)': '<rootDir>/src/redux$1',
    '^utils(.*)': '<rootDir>/src/utils$1',
    '^router(.*)': '<rootDir>/src/router$1'
  },
  transformIgnorePatterns: [
    '/node_modules/(?!antd|@ant-design|rc-.+?|@babel/runtime).+(js|jsx)$'
  ]
}
