module.exports = app => {
    const Persons = require('../models/persons');
    const BD = Persons().model("Persons")

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
         * @apiError (Error 500) {Object} error Object with error message
         * @apiErrorExample {json} Error
         * HTTP/1.1 500 Internal Server Error
         * {"msg": "error message"}
         */
        .get((req, res) => {
            BD.find({}, (error, persons) => {
                if (error) return res.status(500).json({msg: error.message})
                return res.json(persons);
            })
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
         *  HTTP/1.1 201 Created
         *  {
         *      "id" : "1111",
         *      "firstName": "Albert",
         *      "lastName": "Eistein",
         *      "email": "test@test.com"
         *  }
         * @apiError (Error 500) {Object} error Object with error message
         * @apiErrorExample {json} Error
         * HTTP/1.1 500 Internal Server Error
         * {"msg": "error message"}
         */
        .post((req, res) => {
            BD.create(req.body, (error, person) => {
                if (error) return res.status(500).json({msg: error.message})
                return res.json(person)
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
         * @apiError (Error 500) {Object} error Object with error message
         * @apiErrorExample {json} Error
         * HTTP/1.1 500 Internal Server Error
         * {"msg": "error message"}
         */
        .get((req, res) => {
            BD.findOne({_id: req.params.id}, (error, persons) => {
                if (error) return res.status(500).json({msg: error.message});
                return res.json(persons);
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
         * @apiError (Error 500) {Object} error Object with error message
         * @apiErrorExample {json} Error
         * HTTP/1.1 500 Internal Server Error
         * {"msg": "error message"}
         */
        .put((req, res) => {
            BD.update({"_id": req.params.id}, req.body, {upset: true}, (error, person) => {
                if (error) return res.status(500).json({msg: error.message})
                return res.sendStatus(204);
            });
        })

        /**
         * @api {delete} /persons/:id Delete a Person
         * @apiGroup Persons
         * @apiVersion 1.0.0
         * @apiSuccess (Success 204) null No content
         * @apiError (Error 500) {Object} error Object with error message
         * @apiErrorExample {json} Error
         * HTTP/1.1 500 Internal Server Error
         * {"msg": "error message"}
         */
        .delete((req, res) => {
            BD.remove({_id: req.params.id}, (error, persons) => {
                if (error) return res.status(500).json({msg: error.message})
                return res.sendStatus(204);
            })
        });
}