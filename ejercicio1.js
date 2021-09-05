const Sequelize = require('sequelize');

const sequelize = new Sequelize('clase4', 'root', '',{
    host:'localhost',
    dialect: 'mariadb'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

class Vehiculo extends Sequelize.Model {}
Vehiculo.init({
  marca: Sequelize.STRING,
  modelo:Sequelize.STRING,
  anio: Sequelize.INTEGER
}, { sequelize, modelName: 'vehiculos' });


sequelize.sync().then(() => Vehiculo.create({
    marca: 'Renault',
    modelo: 'Kwid',
    anio: 2017
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });

Vehiculo.update({ 
  marca: "Honda" }, {
  where: {
    anio: 2017
  }
}).then(() => {
  console.log("Actualizado");
});
