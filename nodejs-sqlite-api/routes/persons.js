module.exports = app => {
    const Persons = app.db.models.Persons;

    app.route("/persons")
         /**
         * @api {get} /persons List All Persons
         * @apiGroup Persons
         * @apiVersion 1.0.0
         * @apiSuccess {Integer} id Person Id
         * @apiSuccess {String} firstName Person first name
         * @apiSuccess {String} lastName Person last name
         * @apiSuccess {String} email Person email
         * @apiSuccessExample {json} Success
         *  HTTP/1.1 200 OK
         *  [
         *      {
         *        "id" : "1111",
         *        "firstName": "Albert",
         *        "lastName": "Eistein",
         *        "email": "test@test.com"
         *       }
         *   ]
         * @apiError (Error 412) {Object} error Object with error message
         * @apiErrorExample {json} Error
         * HTTP/1.1 412 OK
         * {"msg": "error message"}
         */
        .get((req, res) => {
            Persons.findAll({})
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({msg: error.message});
            });
        })

        /**
         * @api {post} /persons Insert a Person
         * @apiGroup Persons
         * @apiVersion 1.0.0
         * @apiSuccess {Integer} id Person Id
         * @apiSuccess {String} firstName Person first name
         * @apiSuccess {String} lastName Person last name
         * @apiSuccess {String} email Person email
         * @apiSuccessExample {json} Success
         *  HTTP/1.1 201 OK
         *  {
         *      "id" : "1111",
         *      "firstName": "Albert",
         *      "lastName": "Eistein",
         *      "email": "test@test.com"
         *  }
         * @apiError (Error 412) {Object} error Object with error message
         * @apiErrorExample {json} Error
         * HTTP/1.1 412 OK
         * {"msg": "error message"}
         */
        .post((req, res) => {
            Persons.create(req.body)
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({msg: error.message})
            });
        })

    app.route("/persons/:id")
        /**
         * @api {get} /persons get a Person
         * @apiGroup Persons
         * @apiVersion 1.0.0
         * @apiSuccess {Integer} id Person Id
         * @apiSuccess {String} firstName Person first name
         * @apiSuccess {String} lastName Person last name
         * @apiSuccess {String} email Person email
         * @apiSuccessExample {json} Success
         *  HTTP/1.1 200 OK
         *  {
         *      "id" : "1111",
         *      "firstName": "Albert",
         *      "lastName": "Eistein",
         *      "email": "test@test.com"
         *  }
         * @apiError (Error 412) {Object} error Object with error message
         * @apiErrorExample {json} Error
         * HTTP/1.1 412 OK
         * {"msg": "error message"}
         */
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

        /**
         * @api {put} /persons/:id Update a Person
         * @apiGroup Persons
         * @apiVersion 1.0.0
         * @apiParam {String} firstName Person first name
         * @apiParam {String} lastName Person last name
         * @apiParam {String} email Person email
         * @apiParamExample {json} Request Example
         *     {
         *        "firstName": "Albert",
         *        "lastName": "Eistein",
         *        "email": "test@test.com"
         *     }
         * @apiSuccess (Success 204) null No content
         * @apiError (Error 412) {Object} error Object with error message
         * @apiErrorExample {json} Error
         * HTTP/1.1 412 OK
         * {"msg": "error message"}
         */
        .put((req, res) => {
            Persons.update(req.body, {where: req.params})
            .then(result => res.sendStatus(204))
            .catch(error => {
                res.status(412).json({msg: error.message})
            })
        })

        /**
         * @api {delete} /persons/:id Delete a Person
         * @apiGroup Persons
         * @apiVersion 1.0.0
         * @apiSuccess (Success 204) null No content
         * @apiError (Error 412) {Object} error Object with error message
         * @apiErrorExample {json} Error
         * HTTP/1.1 412 OK
         * {"msg": "error message"}
         */
        .delete((req, res) => {
            Persons.destroy({where: req.params})
            .then(result => res.sendStatus(204))
            .catch(error => {
                res.status(412).json({msg: error.message});
            });
        });
}