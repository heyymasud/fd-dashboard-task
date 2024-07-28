const login = async (req, res) => {
    return res.status(200).json({ message: 'login' });
}

const register = async (req, res) => {
    return res.status(200).json({ message: 'register' });
}

module.exports = {
    login,
    register
}