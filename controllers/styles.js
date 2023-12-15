const Styles = require('../models/styles');

const getAllStyles = async (req, res) => {
  const styles = await Styles.find({});
  return res.status(200).json({ nmHits: styles.length, data: styles });
};

const filterStyles = async (req, res) => {
  const styles = await Styles.find(req.query);
  return res.status(200).json({ nmHits: styles.length, data: styles });
};

module.exports = {
  getAllStyles,
  filterStyles,
};
