# eth-read

## Modules

### API

An Express webserver with a REST endpoint to read ethereum contract data. The contract ABI is fetched from Etherscan API. These Etherscan API responses are cached leading to significant improvement in average response time.

#### Endpoints

##### `POST /api/read`

**Request**

```json
{
  "address": "0xdAC17F958D2ee523a2206206994597C13D831ec7", // contract address
  "method": "balanceOf", // method
  "args": ["0xdAC17F958D2ee523a2206206994597C13D831ec7"] // arguments
}
```

Note that `args` can be an empty array or undefined if the particular method does not require any arguments.

**Response**

```json
{
  "result": "947385173722"
}
```

Note that the response always returns string, but the data is in a human readable format instead (only addresses are in hex).

#### Tests

Tests have been written to test edge cases, common error scenarios and their responses. Find the tests at [](./api/test).

#### Improvements

- currently dependent on Etherscan API for contract ABI but there seems be a way to do it (have not tested it yet) without the need for an ABI (ref: https://louisabraham.github.io/articles/no-abi.html)

#### Deployment

Deployed using render at https://eth-read-api.onrender.com/. For running locally check [](./api/README.md).

### App

The app is built using React and Vite. It has a simple form which helps users interact with `eth-read-api`. The UX is built with focus on simplicity.

#### Improvements

- form can be managed using libraries like Formik

#### Deployment

Deployed using render at https://eth-read-app.onrender.com/. For running locally check [](./app/README.md).