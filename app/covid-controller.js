const db = require("./models");

const CovidCases = db.Covid;

const Op = db.Sequelize.Op;

//find all covid cases
exports.findAll = (req, res) => {

    CovidCases.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: 
                    err.message || "Error occurred while retrieving covid case data."
            });
        });
}

//find all covid cases by fips code
exports.findByFips = (req, res) => {
    const fips = req.params.fips;

    CovidCases.findAll({where: {fips: fips}})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: 
                    err.message || "Error occurred while retrieving covid case data."
            });
        });
}

//find all covid cases by fips code
exports.findByDate = (req, res) => {
    const date = req.params.date;

    CovidCases.findAll({where: {date: date}})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: 
                    err.message || "Error occurred while retrieving covid case data."
            });
        });
}
//find a covid case by ID
exports.findOne = (req, res) => {
    const id = req.params.id;

    CovidCases.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Covid Case ID " + id
            });
        });
}