import { DataTypes } from "sequelize";

export const tuboModel = connection => {
    const Tubo = connection.define('tubos',{
        material:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        dn_comercial_mm:{
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        dn_externo_mm:{
            type: DataTypes.DECIMAL
        },
        esp_mm:{
            type: DataTypes.DECIMAL
        },
        dn_interno_mm:{
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
    })
    return Tubo
}