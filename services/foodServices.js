const Foods = require("../models/Foods");
const { createError } = require("../helpers/errorHandler");

const fetchSingleFood = async (id) => {
    return await Foods.findOne({ _id: id })
        .then((doc) => {
            if (doc) return doc;
            throw createError("NOTFOUND");
        })
        .catch((err) => {
            if (err) throw err;
        });
};

const fetchFoods = async () => {
    return await Foods.find()
        .then((doc) => {
            if (doc) return doc;
            throw createError("EMPTYRESULT");
        })
        .catch((err) => {
            if (err) throw err;
        });
};

const fetchFoodsByCategory = async (category) => {
    return await Foods.find({
        category: { $regex: new RegExp("^" + category + "$", "i") },
    })
        .then((doc) => {
            if (doc.length) return doc;
            throw createError("EMPTYRESULT");
        })
        .catch((err) => {
            if (err) throw err;
        });
};

module.exports = { fetchSingleFood, fetchFoods, fetchFoodsByCategory };
