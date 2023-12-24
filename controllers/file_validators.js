const { access, constants } = require('fs');
const { NotFoundError, BadRequestError } = require('../errors/index');
const path = require('path');

const check_file_perm = (file, userID) => {
  const path_id = file.split('*-*')[0].split('/').pop();

  if (path_id != userID) {
    throw new BadRequestError(`All paths must be owned by the user`);
  }
};

const check_file_exists = async (path, name) => {
  access(path, constants.F_OK, (err) => {
    if (err) {
      throw new NotFoundError(`No ${name} with path ${path} exists`);
    }
  });
};

module.exports = {
  check_file_perm,
  check_file_exists,
};
