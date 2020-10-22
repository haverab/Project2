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
          validate: {
              isfirstName: true
          }
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
      },
      jobPostingURL: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      }
      
    });

    return Recruiter;
  };