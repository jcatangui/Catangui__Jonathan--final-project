# FS1020 Project

This is the course project for FS1020.
This API will be used to gather data submitted from the contact form on my portfolio site. All data will be stored in a JSON file.

To run the application run command "npm start"

ROUTES:
All routes are running at http://localhost:3000

1.  GET / : Returns application information.
2.  POST /contact_form/entries : Create a new entry from a contact form
    Required parameters: name, email, phoneNumber, content
    Validation: middleware validation check for parameter availablity and email format validation
    Return: Entry that was submitted
    Data: Entry data is saved to a JSON file (./data/entries.json)
3.  POST /users : Create a new user
    Required parameters: name, password, email
    Validation: middleware validation check for parameter availablity, email format validation and password min length
    Return: User that was created without the password displayed
    Security: User password is hased using bcrypt and 10 rounds
    Data: User data is saved to a JSON file (./data/users.json)
4.  POST /auth : Login for a registered user
    Required parameters: email, password
    Validation: middleware validation check for parameter availablity and email format validation
    Return: user token
    Security: JWT is created at the end of this phase for authentication. Token expires in 5 minutes. JWT secret saved in .env file. User password is validated with hashed password in JSON file.
    Data: User login credentials validated agains the JSON file (./data/users.json)
5.  GET /contact_form/entries : Displays all contact form entries for authenticated users
    Required parameters: valid token
    Validation: none
    Return: All contact form entries
    Security: JWT is validated against user token. JWT secret saved in .env file
    Data: All entries are pulled from a JSON file (./data/entries.json)
6.  GET /contact_form/entries/:id : Displays contact form entry for authenticated users for a specific ID
    Required parameters: valid token, ID
    Validation: none
    Return: Contact form entry for selected ID
    Security: JWT is validated against user token. JWT secret saved in .env file
    Data: All entries are pulled from a JSON file (./data/entries.json)

ERROR HANDLING:

appErrorHandler: Provides error handling for any potential application issues.
pathErrorHandler: Provides error handling for incorrect path/route selection by user

DEPENDENCIES:

1. dotenv: Access environment variables from a .env file
   Install: npm i dotenv
2. express: Web framework
   Install: npm i express
3. jsonwebtoken: Utilizing JWT
   Install: npm i jsonwebtoken
4. uuid: Creation of RFC4122 UUIDs
   Install: npm i uuid
5. validator: String validation
   Install: npm i validator
6. bcrypt: Password hashing library
   Install: npm i validator

FRAMEWORK:

Node JS Express. Developped using version 4.17.1
