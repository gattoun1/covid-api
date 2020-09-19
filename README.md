# covid-api

Install PostgreSQL and PgAdmin. Create database. Update db.js with database info.

Run the following in terminal:
npm install express body-parser cors pg pg-hstore sequelize 

Run app with:
npm start

This will serve app at localhost:8080 . On initialization, a "covids" database table will be created in postgres. Import us-counties.csv file to the database.

API endpoints at:
#1: http://localhost:8080/api/covid/date/2020-04-19

#2: http://localhost:8080/api/covid/fips/53061

Sample API output for #1:
[
{
"id": 70127,
"date": "2020-04-19T05:00:00.000Z",
"county": "Autauga",
"state": "Alabama",
"fips": 1001,
"caseCount": 27,
"deathCount": 2,
"createdAt": "2020-09-18T17:00:00.000Z",
"updatedAt": "2020-09-18T17:00:00.000Z"
},
{
"id": 70128,
"date": "2020-04-19T05:00:00.000Z",
"county": "Baldwin",
"state": "Alabama",
"fips": 1003,
"caseCount": 114,
"deathCount": 3,
"createdAt": "2020-09-18T17:00:00.000Z",
"updatedAt": "2020-09-18T17:00:00.000Z"
},
...
]

