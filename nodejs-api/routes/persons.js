module.exports = app => {
    const Persons = app.db.models.Persons;

    app.route("/persons")
        .get((req, res) => {
            Persons.findAll({})
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({msg: error.message});
            });
        })
        .post((req, res) => {
            Persons.create(req.body)
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({msg: error.message})
            });
        })

    app.route("/persons/:id")
        .get((req, res) => {
            Persons.findOne({where: req.params})
            .then(result => {
                if(result) {
                    res.json(result);
                } else {
                    res.sendStatus(404);
                }
            })
        })
        .put((req, res) => {
            Persons.update(req.body, {where: req.params})
            .then(result => res.sendStatus(204))
            .catch(error => {
                res.status(412).json({msg: error.message})
            })
        })
        .delete((req, res) => {
            Persons.destroy({where: req.params})
            .then(result => res.sendStatus(204))
            .catch(error => {
                res.status(412).json({msg: error.message});
            });
        });
}