## Getting started
### Prerequisites
1. Node: any version starting with 18.12.1 or greater
  - run `node --version` to check current node version
  - If you need to upgrade or install [NodeJs](http://nodejs.org/) : suggest to install via [Node Version Manager NVM](https://github.com/creationix/nvm)
2. A clone or download of this repo on your local machine
### Installation
1. `cd` to the project root
2. `npm install`to install the npm dependencies
### Running locally
- `npm start` to start the local development
- `npm run test` to run the unit test
- `npm run test:coverage` to display the test coverage report
## Implementation Details
Here are some key implementation details of this project:

- Styling: The application's styles are implemented using `react-styled-components`.
- Component Organization: Components are logically split into separate sections.
- GraphQL Interaction: React hooks are used for interacting with GraphQL.
- Test-Driven Development (TDD): Unit tests are written for individual components and hooks.
- Environment Variables: Sensitive credentials and secrets should be stored in an `.env` file to protect them.