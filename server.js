// FakerAPI
const { faker } = require('@faker-js/faker');
// Express
const express = require("express");
const app = express();
const port = 8000;

// Config
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


//  User Classes
class User {
    constructor() {
        this.password = faker.internet.password()
        this.email = faker.internet.email()
        this.phoneNumber = faker.phone.phoneNumber()
        this.lastName = faker.name.lastName()
        this.firstName = faker.name.firstName()
        this.id = faker.database.mongodbObjectId()
    }
}


// Company Company
class Company {
    constructor() {
        this.id = faker.database.mongodbObjectId()
        this.name = faker.company.companyName()
        this.street = faker.address.streetAddress()
        this.city = faker.address.cityName()
        this.state = faker.address.state()
        this.zipCode = faker.address.zipCode()
        this.country = faker.address.country()       
    }
}

const newUser = new User()
const newCompany = new Company()
console.log(newCompany, newUser)


// API Routes RETURNS A NEW USER
app.get( "/api/users/new", (req, res) => {   
    const newUser = new User()
    console.log(newUser)
    res.json(newUser);
});

// API Routes RETURNS A NEW COMPANY
app.get( "/api/companies/new", (req, res) => {
    const newCompany = new Company()
    console.log(newCompany);
    res.json(newCompany)
});

// API Routes RETURNS USER & A COMPANY
app.get( "/api/user/company", (req, res) => {
    const newUser = new User()
    const newCompany = new Company()
    res.json({newCompany, newUser})
});


// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
