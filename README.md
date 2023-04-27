# Simple Server

This is a simple application with two endpoints designed to receive a form from another JS/TS application.

## How to Use

### Clone the Repository

To clone this repository to your local machine, use the command:

```bash
gh repo clone TenaciousHare/SimpleServer
```

### Install Dependencies

To install the required dependencies, run the command:

```bash
npm install
```

### Run the Application

You can choose the port on which the application will run. For example:

```js
const port = 3000;
```

Next, change the link to which your FormApp is pointing. For example:

```js
res.header("Access-Control-Allow-Origin", "http://localhost:8080");
```

In your application, choose the endpoint to which you want to send your form. For example:

```js
const response = await fetch("http://localhost:3000/form", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  mode: "cors",
  body: JSON.stringify(data),
});
```

If you want to simulate a server error, change the link to:

```js
"http://localhost:3000/form-with-error";
```

# Finally, don't forget to have fun with this project and explore its capabilities! Happy coding!
