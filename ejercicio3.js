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
    marca: 'Mercedes',
    modelo: 'AMG One',
    anio: 2021
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });

  Vehiculo.create({
    marca: 'Ferrari',
    modelo: 'F2012',
    anio: 2013
  })
  .then(jane => {
    console.log(jane.toJSON());
  });

  Vehiculo.create({
    marca: 'Renault',
    modelo: 'R25',
    anio: 2005
  })
  .then(jane => {
    console.log(jane.toJSON());
  });

  Vehiculo.update({
      modelo: 'R26',
      where:{
          modelo: 'R25',
      }
  })