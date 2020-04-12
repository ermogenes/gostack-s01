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

Manual execution (development)
```
yarn webpack --mode development
```

Manual execution (production)
```
yarn webpack --mode production
```
or
```
yarn build
```

Live-reload install
```
yarn add webpack-dev-server -D
```

Live-reload execution
```
yarn webpack-dev-server --mode development
```
or
```
yarn dev
```

Default location: http://localhost:8080/

To bundle CSS
```
yarn add style-loader css-loader
```

To bundle images
```
yarn add file-loader
```