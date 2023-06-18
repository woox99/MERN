const express = require("express");
const app = express();
const port = 8000;

const {faker} = require('@faker-js/faker');

const createUser = () => {
  const newUser = {
    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    id: 1
  };
  return newUser
}

const createCompany = () => {
  const newCompany = {
    id: 1,
    name: faker.company.name(),
    address: {
      street: faker.location.street(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
      country: faker.location.country()
    }
  };
  return newCompany
}

const newFakeUser = createUser();
const newFakeCompany = createCompany();

app.get("/api/users/new", (req, res) => {
  res.json( newFakeUser );
});
app.get("/api/companies/new", (req, res) => {
  res.json( newFakeCompany );
});
app.get("/api/user/company", (req, res) => {
  res.json( {
    user: newFakeUser,
    company: newFakeCompany
  } );
});


// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );