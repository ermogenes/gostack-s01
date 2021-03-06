module.exports = {
    presets: [
        // will use environment info to detect what to transpile
        // (ie. modern browser capabilities)
        '@babel/preset-env',
        // for react projects (JSX and others)
        '@babel/preset-react',
    ],
    plugins: [
        // add babel dev support to async/await
        '@babel/plugin-transform-runtime',
    ],
};