const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "data",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      header: { type: DataTypes.TEXT, allowNull: true },
      character: { type: DataTypes.TEXT, allowNull: true },
    },
    { timestamps: true }
  );
};
