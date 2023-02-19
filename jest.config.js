module.exports = {
  modulePaths: ["/shared/vendor/modules"],
  moduleFileExtensions: ["js", "jsx"],
  moduleDirectories: ["src", "node_modules"],

  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js",

    "^config$": "<rootDir>/app-config.js",
  },
};
