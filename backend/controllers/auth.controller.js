const { Users } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const register = async (req, res, next) => {
  // ambil data dari req.body ok
  const { fullname, email, password } = req.body;

  // cek inputan tidak boleh kosong ok
  if (!fullname || !email || !password) {
    return res.status(400).json({
        message: "Data tidak boleh kosong" 
    });
  }

  // cek apakah email sudah terdaftar ok
  const exist = await Users.findOne({ 
    where: { 
        email 
    } 
});
  // ok
  if (exist) {
    return res.status(400).json({ message: "email sudah terdaftar, silahkan ganti email" });
  }

  // enkripsi password ok
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = await Users.create({
    fullname,
    email,
    password: hashedPassword,
  })

  return res.status(201).json(newUser);
};
const login = async (req, res, next) => {
  // ambil data dari req.body ok
  const { email, password } = req.body;

  // cek inputan tidak boleh kosong ok
  if (!email || !password) {
    return res.status(400).json({
        message: "Data tidak boleh kosong" 
    });
  }

  // cek apakah email terdaftar 
  const user = await Users.findOne({ 
    where: { 
        email 
    } 
});
  // ok
  if (!user) {
    return res.status(400).json({ message: "Email atau password salah" });
  }

  // cek dan compare password ok
  const isMatch = bcrypt.compareSync(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Email atau password salah" });
  }

  // generate token ok
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 60*5 });

  return res.status(200).json({ message: "Login Berhasil", token });
};

module.exports = {
  login,
  register,
};
