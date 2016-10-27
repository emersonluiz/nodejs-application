module.exports = app => {
    app.db.sequelize.sync().done(() => {
        app.listen(app.get("port"), () => {
            console.log(`Node runnng on port: ${app.get("port")}`);
        })
    })
}