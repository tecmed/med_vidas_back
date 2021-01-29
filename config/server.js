module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 3030),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '0d721f44a80c6859a34a967802738c92'),
    },
  },
});
