const getAllStyles = async (req, res) => {
  return res.status(200).json({ msg: 'testing route' });
};

module.exports = {
  getAllStyles,
};
