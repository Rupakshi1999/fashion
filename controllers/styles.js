const Styles = require('../models/styles');

const db__filter = (query) => {
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
const db_order = (query) => {
  const { sort } = query;
  if (sort) {
    const sortList = sort.split(',').join(' ');
    return sortList;
  } else {
    return '-createdAt';
  }
};

const db_fields = (query) => {
  const { properties } = query;
  if (properties) {
    const porpertyList = properties.split(',').join(' ');
    return porpertyList;
  }
};

const getStyles = async (req, res) => {
  const styles = await Styles.find(db__filter(req.query))
    .sort(db_order(req.query))
    .select(db_fields(req.query));
  if (!styles) {
    throw new Error(`no data with query ${db__filter}`);
  }
  return res.status(200).json({ nmHits: styles.length, data: styles });
};

module.exports = {
  getStyles,
};
