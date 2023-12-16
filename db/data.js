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
  const { fields } = query;
  if (fields) {
    const porpertyList = fields.split(',').join(' ');
    return porpertyList;
  }
};

module.exports = {
  db__filter,
  db_order,
  db_fields,
};
