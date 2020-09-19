module.exports = (sequelize, Sequelize) => {
    const Covid = sequelize.define("covid", {
        id: { type: Sequelize.INTEGER, primaryKey: true },
        date: { type: Sequelize.DATE},
        county: {type: Sequelize.STRING },
        state: {type: Sequelize.STRING},
        fips: { type: Sequelize.INTEGER},
        caseCount: {type: Sequelize.INTEGER },
        deathCount: {type: Sequelize.INTEGER }
    });
    return Covid;
}