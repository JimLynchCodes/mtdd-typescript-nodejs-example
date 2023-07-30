module.exports = function (config) {
    config.set({
        packageManager: 'npm', // Use npm as the package manager (or 'yarn' if you prefer)
        reporters: ['clear-text', 'progress'], // Choose the desired reporters
        testRunner: 'jest', // Use jest as the test runner (or 'mocha', 'jasmine', etc.)
        mutate: ['src/**/*.ts'], // Specify the files to mutate (adjust this according to your project's structure)

        coverageAnalysis: 'perTest', // Coverage analysis is supported
        tsconfigFile: 'tsconfig.json', // Location of your tsconfig.json file
        mutator: 'typescript', // Specify that you want to mutate typescript code
        transpilers: [
            'typescript' // Specify that your typescript code needs to be transpiled before tests can be run. Not needed if you're using ts-node Just-in-time compilation.
        ]
    });

}
