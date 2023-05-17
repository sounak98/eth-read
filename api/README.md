# eth-read-api

## Getting Started

### Install dependencies

```shell
$ npm install
```

### Create environment file

```shell
$ cp .env.sample .env
```

Then populate the .env file with the secrets.

### Run dev server

```shell
$ npm run dev
```

### Run tests

```shell
$ npm run test
```

## Notable dependencies

- `express`: web framework
- `ethers`: for interacting with the blockchain
- `node-cache`: to cache ABI responses from etherscan
- `supertest`: for writing e2e tests
