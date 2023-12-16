const db__filter = (query) => {
  const { featured, search, color, _id, numericFilter } = query;
  const queryObject = {};
  if (_id) {
    // search by id should not be paired with another filters
    queryObject._id = _id;
    return queryObject;
  }

  if (numericFilter) {
    const operatorMap = {
      '>': '$gt',
      '>=': '$gte',
      '=': '$eq',
      '<': '$lt',
      '<=': '$lte',
    };

    const regex = /\b(<|>|>=|=|<|<=)\b/g;
    let filters = numericFilter.replace(
      regex,
      (match) => ` ${operatorMap[match]} `
    );
    const options = ['likes', 'createdAt'];
    filters = filters.split(',').forEach((item) => {
      const [field, op, value] = item.split(' ');
      if (options.includes(field)) {
        queryObject[field] = { [op]: Number(value) };
      }
    });
  }

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
