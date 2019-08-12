# Mocha - Chai TDD example

A simple example implementing API testing using TDD

## Getting Started

```
git clone https://github.com/Reechajoshi/tdd_demo.git
cd tdd_demo

npm install
```

To start the application:
```
npm run start
```

To run the test:
```
npm run test
```

### Prerequisites

Following dependencies are required:

```
node v8.16.0
```

## API Documentation

Provided application exposes 2 APIs 
1. rgbToHex - takes three query parameters: red, green, blue and returns hex value
2. hexToRgb - takes hex value and returns rgb value

### Break down into end to end tests

Provided test poses failure and success condition:

```
Color code converter API - 
	RGB to Hex- 
		returns status code 200
		returns status code 500
		returns the color in hex

	Hex to RGB-
		returns status code 200
		return code in RGB
```

## Built With

* [Express](https://expressjs.com/) - The web framework used
* [Mocha](https://mochajs.org/) - Test framework
* [Chai](https://www.chaijs.com/) - Assertion library

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Richa Jn** - *Initial work* - [Reechajoshi](https://github.com/Reechajoshi)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
