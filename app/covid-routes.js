module.exports = app => {
    const covids = require("./covid-controller.js");

    var router = require("express").Router();

    //retrieve all covid cases
    router.get("/", covids.findAll);

    //retrieve single covid case by id
    router.get("/:id", covids.findOne);

    //retrieve cases by fips code
    router.get("/fips/:fips", covids.findByFips);

    //retrieve cases by fips code
    router.get("/date/:date", covids.findByDate);
    

    app.use("/api/covid", router);
}