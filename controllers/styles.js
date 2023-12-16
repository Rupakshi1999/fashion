const Styles = require('../models/styles');
const { db__filter, db_order, db_fields } = require('../db/data');

const getStyles = async (req, res) => {
  let result = Styles.find(db__filter(req.query))
    .sort(db_order(req.query))
    .select(db_fields(req.query));

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const styles = await result;
  if (!styles) {
    throw new Error(`no data with query ${db__filter}`);
  }
  return res.status(200).json({ nmHits: styles.length, data: styles });
};

module.exports = {
  getStyles,
};
