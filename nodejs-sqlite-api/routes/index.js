module.exports = app => {
    /**
     * @api {get} / API ROOT
     * @apiVersion 1.0.0
     * @apiGroup Status
     * @apiSuccess {String} status Status Message
     * @apiSuccessExample {json} Success
     *  HTTP/1.1 200 OK
     *  {"status" : "NodeJS API - ROOT Resource"}
     */
    app.get("/", (req, res) => {
        res.json({status: "NodeJS API - ROOT Resource"});
    })
}