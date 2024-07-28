const getAllRevenues = async (req, res) => {
    return res.status(200).json({ message: 'getAllRevenues' });
}

module.exports = {
    getAllRevenues
}