module.exports = {
    globals: {
        "ts-jest": {
            tsConfig: "tsconfig.json",
        },
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
    transform: { "^.+\\.(js|jsx|ts|tsx)$": "babel-jest" },
    testRegex: "(/src/**/*.*\\.(test|spec))\\.(jsx?|tsx?)$",
    testEnvironment: "node",
    collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
};
