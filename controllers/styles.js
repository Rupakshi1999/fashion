const Styles = require('../models/styles');

const getStyles = async (req, res) => {
  const styles = await Styles.find(req.query);
  return res.status(200).json({ nmHits: styles.length, data: styles });
};

module.exports = {
  getStyles,
};
