const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const cors = require('cors');
require('dotenv').config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.options('*', cors());

// Sequelize Configuration
const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.USERNAME,
    process.env.PASSWORD,
    {
        host: process.env.HOST,
        dialect: 'postgres'
    }
);

// DB Connection 
sequelize
    .authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err));

// Sync Database
sequelize.sync()
    .then(() => console.log('Database synchronized'))
    .catch((err) => console.error('Error synchronizing database:', err));

// DB Model
const profile = sequelize.define('profile', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    name : {
        type: DataTypes.STRING
    },
    url : {
        type : DataTypes.STRING
    },
    about : {
        type : DataTypes.STRING(1000)
    },
    bio : {
        type : DataTypes.STRING(500)
    },
    location : {
        type : DataTypes.STRING
    },
    followerCount : {
        type : DataTypes.INTEGER
    },
    connectionCount : {
        type : DataTypes.INTEGER
    },
}, {timestamps : false});

// Routes
app.post('/api/profiles', async (req, res)=>{
    const newUser = await profile.create(req.body);
    console.log(newUser.dataValues);
    res.send(newUser)
});

app.listen(3000, ()=>{
    console.log('PORT : 3000')
});