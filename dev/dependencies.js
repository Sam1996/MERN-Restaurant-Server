const meals = [
    {
        name: "Chicken Handi",
        description: "Serve the chicken handi hot with naan or rotis. Enjoy!",
        category: "Non-veg",
        price: 125,
        picture:
            "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg",
    },
    {
        name: "Pancakes",
        description: "then wrap in cling film and freeze for up to 2 months.",
        category: "Starter",
        price: 45,
        picture:
            "https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg",
    },
    {
        name: "Cream Cheese Tart",
        description:
            "Pour over the tomato slices and mix well. Decorate with basil leaves and enjoy",
        category: "Starter",
        price: 150,
        picture:
            "https://www.themealdb.com/images/media/meals/wurrux1468416624.jpg",
    },
    {
        name: "New York cheesecake",
        description:
            "Slide the cheesecake off the bottom of the tin onto a plate, Enjoy the food!",
        category: "Starter",
        price: 45,
        picture:
            "https://www.themealdb.com/images/media/meals/swttys1511385853.jpg",
    },
    {
        name: "Rigatoni",
        description:
            "Finish with a sprinkling of chopped fennel fronds, if you have any, and serve at once.",
        category: "Non-veg",
        price: 160,
        picture:
            "https://www.themealdb.com/images/media/meals/qtqvys1468573168.jpg",
    },
    {
        name: "Summer Pistou",
        description:
            "Pour into a flask for a packed lunch. Chill the remainder.",
        category: "Veg",
        price: 110,
        picture:
            "https://www.themealdb.com/images/media/meals/rqtxvr1511792990.jpg",
    },
    {
        name: "Three-cheese souffles",
        description:
            "Cook for 8-10 mins until golden. Serve immediately alongside some simply dressed salad.",
        category: "Veg",
        price: 45,
        picture:
            "https://www.themealdb.com/images/media/meals/sxwquu1511793428.jpg",
    },
    {
        name: "Chicken Casserole",
        description:
            "Remove from oven and let stand 5 minutes before serving. Drizzle each serving with remaining sauce. Enjoy!",
        category: "Non-veg",
        price: 145,
        picture:
            "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
    },
    {
        name: "Vegetarian Casserole",
        description:
            "Stir in the lentils and bring back to a simmer. Serve with wild and white basmati rice, mash or quinoa.",
        category: "Veg",
        price: 145,
        picture:
            "https://www.themealdb.com/images/media/meals/vptwyt1511450962.jpg",
    },
    {
        name: "Cream Cheese Breakfast",
        description:
            "Bake for 15-20 minutes or until pastry is golden brown and puffed.",
        category: "Veg",
        price: 75,
        picture:
            "https://www.themealdb.com/images/media/meals/vptwyt1511450962.jpg",
    },
    {
        name: "Beef Wellington",
        description:
            "The beef should still be pink in the centre when you serve it.",
        category: "Non-veg",
        price: 175,
        picture:
            "https://www.themealdb.com/images/media/meals/vvpprx1487325699.jpg",
    },
    {
        name: "Lamb Biryani",
        description:
            "If it is spicy in the end, squeeze some lemon, it will reduce the heat and enhance the flavors",
        category: "Non-veg",
        price: 199,
        picture:
            "https://www.themealdb.com/images/media/meals/xrttsx1487339558.jpg",
    },
    {
        name: "Roasted Eggplant",
        description:
            "Arrange eggplant halves on top. Spread a few tablespoons of tahini sauce over each eggplant half and sprinkle with pine nuts",
        category: "Veg",
        price: 125,
        picture:
            "https://www.themealdb.com/images/media/meals/ysqrus1487425681.jpg",
    },
];

router.get("/populate", (req, res) => {
    Foods.insertMany(meals)
        .then((doc) => {
            res.status(200).json(doc);
        })
        .catch((err) => {
            res.status(err.status).json(err.message);
        });
});
