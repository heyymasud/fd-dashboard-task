const { Revenues } = require("../models");
const sequelize = require("sequelize");

const getAllRevenues = async (req, res) => {
  const revenues = await Revenues.findAll({
    attributes: [ // menentukan kolom yang ingin diambil ok
      [sequelize.fn("SUM", sequelize.col("total")), "total"],
      [sequelize.fn("YEAR", sequelize.col("createdAt")), "year"], 
      [sequelize.fn("MONTH", sequelize.col("createdAt")), "month"],
    ], // mengelompokkan data berdasarkan tahun dan bulan ok
    group: [[sequelize.fn("YEAR", sequelize.col("createdAt"))],[sequelize.fn("MONTH", sequelize.col("createdAt"))]],
  });

  return res.status(200).json(revenues);
};

module.exports = {
  getAllRevenues,
};
