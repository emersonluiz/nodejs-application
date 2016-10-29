module.exports = app => {
    app.db.sequelize.sync().done(() => {
        app.listen(app.get("port"), () => {
            console.log(`Node runing on port: ${app.get("port")}`);
        })
    })
}