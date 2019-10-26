This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

# Preguntas de la prueba
## React js ,ciclo de vida de los componentes.

- Estos son los métodos que intervienen en los puntos de construcción, actualización y destrucción de los componentes.
1. componentWillMount : Este método se ejecuta antes de que el componente sea montado en el DOM
2. componentDidMount: Este método se ejecuta justo después de que el componente se haya montado en el DOM. Es el lugar ideal para integrar librerías de terceros, peticiones ajax y demás.
2. componentWillReciveProps: Este método no se ejecuta una vez que se monte el componente sino que esperará las propiedades que vengan del componente padre para ejecutarse.
4. componentWillUpdate: Similar al anterior solo que se ejecuta justo antes del render, cuando ya se han recibido nuestras propiedades y estados.
5. shouldComponentUpdate: Se ejecuta igual k el anterior.Retorna true por defecto, si hacemos que retorne false se cancela el render y hasta que no ocurra un cambio de propiedad o de estado no se ejecutarán componentWillUpdate ni componentWillReciveProps.
6. componentDidUpdate: Se invoca inmediatamente que el componente se actualiza.
7. componentWillUnmount: Se ejecuta justo antes de que el componente sea destruido.

## El orden de ejecución sería el siguiente:
### Creación de un componente:
1. Se dispara el método componentWillMount
2. Se renderiza y se monta el componente en el DOM
3. Se dispara el método componentDidMount
### Actualización de un componente:
4. Se dispara el método shouldComponentUpdate
5. Se dispara el método componentWillReceiveProps si recibe nuevas props.
6. Se dispara el método componentWillUpdate antes de volver a renderizar.
7. Se actualiza el componente y se renderiza en el DOM
8. Se dispara el método componentDidUpdate una vez este el componente renderizado.
### Destrucción de un componente:
9. Se dispara el método componentWillUnmount antes de que se destruya el componente
10. El componente es destruido y eliminado del DOM



## react-router-dom.min.js:1 Uncaught Error: Cannot find module "prop-types"
- Esto se debe a que a partir de la versión 15 de react prop-types se separó como una dependencia independiente que debes agregarla por npm o a través de un script.

### Utilizando comillas simples const str = (‘Laravel:’ + parseInt(version) + ‘is updated.’)

