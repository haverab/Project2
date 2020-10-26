// Creating our User model
module.exports = function(sequelize, DataTypes) {
    const Gigs = sequelize.define("Gigs", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },

      // recruiterId: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   unique: false
  
      // },
     
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
});
// Gigs.associate = function(models) {
//   // We're saying that a Gig should belong to an User
//   // A Gig can't be created without a User due to the foreign key constraint
//   Gigs.belongsTo(models.User, {
//     foreignKey: {
//       allowNull: false
//     }
//   });
// };
   
    return Gigs;
  };
