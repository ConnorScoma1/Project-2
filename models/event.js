

//create a event Model
module.exports = function (sequelize, DataTypes)
{
  
  var Event = sequelize.define("Event", {
    // id: {
    //   type: Sequelize.INTEGER,
    //   autoIncrement: true,
    //   primaryKey: true
    // },
    name: {
      type: DataTypes.STRING
    },
    location: {
      type: DataTypes.STRING
    },
    eventType: {
      type: DataTypes.STRING
    },
    date: {
      type: DataTypes.STRING
      // date without time
    },
    // time: {
    //   type: Sequelize.DATE
    //   //timestap
    // }
  },{
      timestamps: false,
  
    });
  return Event; 
  }



