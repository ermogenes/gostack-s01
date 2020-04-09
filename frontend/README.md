# Frontend

### Project creation with Babel and Webpack

```
yarn init -y
yarn add react react-dom
yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli
yarn add @babel/cli
```

### Babel

Manual execution
```
yarn babel src/index.js --out-file public/bundle.js
```

### Webpack

Integration with Babel
```
yarn add babel-loader
```

Manual execution
```
yarn webpack --mode development
```

Live-reload install
```
yarn add webpack-dev-server -D
```

Live-reload execution
```
yarn webpack-dev-server --mode development
```
Default location: http://localhost:8080/
