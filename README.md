# ReactJS - App Template

This template was created to ease the development of new ReactJS projects.

```javascript
// package.json
{
  //...
  "dependencies": {
    "@rocketseat/unform": "^1.3.0",
    "axios": "^0.18.0",
    "connected-react-router": "^6.4.0",
    "dotenv": "^8.0.0",
    "history": "^4.9.0",
    "prop-types": "^15.7.2",
    "react": "^16.8.6",
    "react-dom": "^16.8.6",
    "react-redux": "^7.0.3",
    "react-router-dom": "^5.0.0",
    "react-scripts": "^3.0.1",
    "react-toastify": "^5.1.0",
    "reactotron-react-js": "^3.2.3",
    "reactotron-redux": "^3.1.0",
    "reactotron-redux-saga": "^4.2.2",
    "redux": "^4.0.1",
    "redux-saga": "^1.0.2",
    "redux-thunk": "^2.3.0",
    "reduxsauce": "^1.1.0",
    "seamless-immutable": "^7.1.4",
    "styled-components": "^4.2.0",
    "yup": "^0.27.0"
  },
  "devDependencies": {
    "@commitlint/cli": "^7.6.1",
    "@commitlint/config-conventional": "^7.6.0",
    "commitlint-config-rocketseat": "^0.0.1",
    "eslint": "^5.16.0",
    "eslint-config-airbnb": "^17.1.0",
    "eslint-plugin-import": "^2.17.2",
    "eslint-plugin-jsx-a11y": "^6.2.1",
    "eslint-plugin-react": "^7.13.0",
    "eslint-plugin-react-hooks": "^1.6.0",
    "husky": "^2.3.0"
  }
}
```

<br />

## How to Start Application?

Create a `.env` file based into `.env.example` and run:

```shell
# install dependencies
$ yarn || npm install

# run application
$ yarn start || npm start
```

To create a docker container, run:

```shell
# create image
$ docker build -t your-image-name .

# run application (port: 3099)
$ docker run --name your-container-name -p 3099:3000 -d your-image-name
```

<br/>

Best regards,

**Thiago Rodrigues de Souza** \
**email:** email@thiagodesouza.com.br \
**site:** [https://www.thiagodesouza.com.br](https://www.thiagodesouza.com.br)
