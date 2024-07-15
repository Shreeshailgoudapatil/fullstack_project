const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:'); // Using an in-memory SQLite database

// Define the Dish model
const Dish = sequelize.define('Dish', {
    dishId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    dishName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isPublished: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
});

// Initial data
const initialData = [
    {
        dishId: 1,
        dishName: "Jeera Rice",
        imageUrl: "https://nosh-assignment.s3.ap-south-1.amazonaws.com/jeera-rice.jpg",
        isPublished: true
    },
    {
        dishId: 2,
        dishName: "Paneer Tikka",
        imageUrl: "https://nosh-assignment.s3.ap-south-1.amazonaws.com/paneer-tikka.jpg",
        isPublished: true
    },
    {
        dishId: 3,
        dishName: "Rabdi",
        imageUrl: "https://nosh-assignment.s3.ap-south-1.amazonaws.com/rabdi.jpg",
        isPublished: true
    },
    {
        dishId: 4,
        dishName: "Chicken Biryani",
        imageUrl: "https://nosh-assignment.s3.ap-south-1.amazonaws.com/chicken-biryani.jpg",
        isPublished: true
    },
    {
        dishId: 5,
        dishName: "Alfredo Pasta",
        imageUrl: "https://nosh-assignment.s3.ap-south-1.amazonaws.com/alfredo-pasta.jpg",
        isPublished: true
    }
];

// Synchronize the database and create the tables
sequelize.sync({ force: true }).then(() => {
    console.log('Database & tables created!');
    initialData.forEach(dish => {
        Dish.create(dish);
    });
});

module.exports = {
    Dish
};
