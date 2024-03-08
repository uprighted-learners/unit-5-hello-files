const express = require("express");
const app = express();

const PORT = 3000;

app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(`${__dirname}/example.html`);
});

app.get("/about", (request, response) => {
  response.sendFile(`${__dirname}/public/about.html`);
});

app.get("/contact", (request, response) => {
  response.sendFile(`${__dirname}/public/contact.html`);
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
