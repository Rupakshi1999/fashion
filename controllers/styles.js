const Styles = require('../models/styles');

const queryfun = (query) => {
  const { featured, name, likes, color, createdAt } = query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === 'true' ? true : false;
  }
  if (name) {
    queryObject.name = name;
  }

  if (color) {
    queryObject.color = color;
  }

  return queryObject;
};

const getStyles = async (req, res) => {
  const styles = await Styles.find(queryfun(req.query));
  if (!styles) {
    throw new Error(`no data with query ${queryfun}`);
  }
  return res.status(200).json({ nmHits: styles.length, data: styles });
};

module.exports = {
  getStyles,
};
