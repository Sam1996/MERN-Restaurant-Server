var express = require("express");
const Foods = require("../models/Foods");
const {
    fetchSingleFood,
    fetchFoods,
    fetchFoodsByCategory,
} = require("../services/foodServices");
var router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).json({ message: "I am alive" });
});

router.get("/food/:id", (req, res) => {
    fetchSingleFood(req.params.id)
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((err) => {
            res.status(err.status).send(err);
        });
});

router.get("/foods", (req, res) => {
    fetchFoods()
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((err) => {
            res.status(err.status).send(err);
        });
});

router.get("/category/:category", (req, res) => {
    fetchFoodsByCategory(req.params.category)
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((err) => {
            res.status(err.status).send(err);
        });
});

module.exports = router;
