const getAllStyles = async (req, res) => {
  throw new Error('tesing async error');
  return res.status(200).json({ msg: 'testing route' });
};

module.exports = {
  getAllStyles,
};
