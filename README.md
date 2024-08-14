# NestJS Microservices POC

This project is a Proof of Concept (POC) for building microservices using the NestJS framework. It demonstrates how to create, manage, and communicate between microservices in a scalable and efficient manner.

## Technologies Used

- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/) (optional for containerization)
- [PostgreSQL](https://www.postgresql.org/) (or any other database)

## Prerequisites

Before you begin, ensure you have met the following requirements:
- You have installed [Node.js](https://nodejs.org/) (v14.x or later)
- You have installed [npm](https://www.npmjs.com/) (v6.x or later)
- You have installed [Docker](https://www.docker.com/) (optional, for containerization)
- You have a running instance of PostgreSQL (or any other database)

## Setup

To set up the project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/nest-ms-poc.git
    ```

2. Navigate to the project directory:
    ```bash
    cd nest-ms-poc
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Set up environment variables:
    - Create a `.env` file in the root directory.
    - Add the necessary environment variables as shown in `.env.example`.

5. Run the project:
    ```bash
    npm run start:dev
    ```

## Usage

To use the project, you can interact with the microservices via their respective endpoints. Detailed API documentation can be found in the `docs` directory or by accessing the Swagger UI if configured.

## Docker Setup (Optional)

To run the project using Docker, follow these steps:

1. Build the Docker image:
    ```bash
    docker build -t nest-ms-poc .
    ```

2. Run the Docker container:
    ```bash
    docker run -p 3000:3000 nest-ms-poc
    ```

## Contributing

To contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-branch
    ```
3. Make your changes and commit them:
    ```bash
    git commit -m 'Add some feature'
    ```
4. Push to the branch:
    ```bash
    git push origin feature-branch
    ```
5. Create a pull request.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.