module.exports = (sequelize, DataTypes) =>{
    const Users = sequelize.define("Users",{
        Id : {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email : {
            type : DataTypes.STRING,
            allowNull : false
        },
        password : {
            type : DataTypes.STRING,
            allowNull : false
        }    
    },{
        timestamps: false
    })

    return  Users;
}