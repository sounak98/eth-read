# eth-read

## Modules

### API

An Express webserver with a REST endpoint to read ethereum contract data. The contract ABI is fetched from Etherscan API. These Etherscan API responses are cached leading to significant improvement in average response time.

#### Endpoints

##### `POST /api/read`

**Request**

```json
{
  "address": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
  "method": "balanceOf",
  "args": ["0xdAC17F958D2ee523a2206206994597C13D831ec7"]
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

Tests have been written to test edge cases, common error scenarios and their responses. Find the tests at [api/test](./api/test).

#### Improvements

- currently dependent on Etherscan API for contract ABI but we could try to detect function selectors in the bytecode (reference https://louisabraham.github.io/articles/no-abi.html)

- read result can be returned in appropriate data types (number, boolean) instead of string

#### Deployment

Deployed using render at https://eth-read-api.onrender.com. Note that the first request might take longer because Render fires up the server on the first request after being idle for long. For running locally check [api/README.md](./api/README.md).

### App

The app is built using React and Vite. It has a simple form which helps users interact with `eth-read-api`. The UX is built with focus on simplicity.

#### Improvements

- form can be managed using libraries like Formik

#### Deployment

Deployed using render at https://eth-read-app.onrender.com. For running locally check [app/README.md](./app/README.md).
