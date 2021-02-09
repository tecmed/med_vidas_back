'use strict';
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  find: ctx => {
    return strapi.query('vida').find(ctx.query, [
      {
        path: 'category',
        populate: {
          path: 'vigencia',
        },
      },
    ]);
  },
};
