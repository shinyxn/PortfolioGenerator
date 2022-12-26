import {Sequelize} from "sequelize";

const db = new Sequelize('portgen_db','root','', {
    host: "localhost",
    dialect: "mysql"
});

export default db;