# Frontend

### Project creation

```
yarn init -y
yarn add react react-dom
yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli
yarn add @babel/cli
```

### How to bundle with Babel

```
yarn babel src/index.js --out-file public/bundle.js
```