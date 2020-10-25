// Creating our User model
module.exports = function(sequelize, DataTypes) {
    const Gigs = sequelize.define("Gigs", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },

      recruiterId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
  
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: true
  
      },
    jobTitle: {
        type: DataTypes.STRING,
        allowNull: false,
    },
     
  city: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
       
      },
      
      
  state: {
    type: DataTypes.STRING,
    allowNull: false
    },

    jobURL: {
      type: DataTypes.STRING,
     allowNull: true,
      
  },
  // })
  //   Gigs.associate = function(models) {
  //     Gigs.belongsTo(models.User, {
  //       foreignKey: {
         
  //         allowNull: false
  //       }
  //     });
  //   };
})
   
    return Gigs;
  };
