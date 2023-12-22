const jobs__filter = (query) => {
  const { search, liked, stage, createdAt } = query;
  const queryObject = {};

  if (liked) {
    queryObject.liked = liked === 'true' ? true : false;
  }
  if (search) {
    queryObject.title = {
      $regex: search,
      $options: 'i',
    };
  }

  if (stage) {
    queryObject.stage = stage;
  }

  return queryObject;
};
const sort_jobs = (query) => {
  const { sort } = query;
  if (sort) {
    const sortList = sort.split(',').join(' ');
    return sortList;
  } else {
    return '-createdAt';
  }
};

const get_specified_fields = (query) => {
  const { fields } = query;
  if (fields) {
    const porpertyList = fields.split(',').join(' ');
    return porpertyList;
  }
};

module.exports = {
  jobs__filter,
  sort_jobs,
  get_specified_fields,
};
