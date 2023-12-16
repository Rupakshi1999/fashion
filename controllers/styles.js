const Styles = require('../models/styles');

const db_query = (query) => {
  const { featured, search, likes, color, createdAt } = query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === 'true' ? true : false;
  }
  if (search) {
    queryObject.title = {
      $regex: search,
      $options: 'i',
    };
  }

  if (color) {
    queryObject.color = color;
  }

  return queryObject;
};

const getStyles = async (req, res) => {
  const styles = await Styles.find(db_query(req.query));
  if (!styles) {
    throw new Error(`no data with query ${db_query}`);
  }
  return res.status(200).json({ nmHits: styles.length, data: styles });
};

module.exports = {
  getStyles,
};
