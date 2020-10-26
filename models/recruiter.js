// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
//const bcrypt = require("bcryptjs");


module.exports = function(sequelize, DataTypes) {
    var Recruiter = sequelize.define("Recruiter", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
       
      firstName: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
         
        },

      lastName: {
           type: DataTypes.STRING,
           allowNull: false,
           unique: true,
           validate: {
               islastName: true
           }
      },

      CompanyName: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
              isCompanyName: true
          }
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      // The password cannot be null
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
      
    });
  //   // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  // User.prototype.validPassword = function(password) {
  //   return bcrypt.compareSync(password, this.password);
  // };
  // // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // // In this case, before a User is created, we will automatically hash their password
  // User.addHook("beforeCreate", user => {
  //   user.password = bcrypt.hashSync(
  //     user.password,
  //     bcrypt.genSaltSync(10),
  //     null
  //   );
  // });
  return Recruiter;
};

  