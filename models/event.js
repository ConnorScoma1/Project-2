var Sequelize = require("sequelize");
//reference connection to db
var sequelize = require("../config/connection.js");


//create a event Model

var Event = sequelize.define("event", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  
  name: {
    type: Sequelize.STRING
  },
  location: {
    type: Sequelize.STRING
  },
  eventType: {
    type: Sequelize.STRING
  },
  date: {
    type: Sequelize.DATEONLY
    //date without time
  },
  time: {
    type: Sequelize.DATE
    //timestap
  }
},{
    timestamps: false,
  
    freezeTableName: true
  });

  //sync model with db
Event.sync();

//export
module.exports = Event; 
