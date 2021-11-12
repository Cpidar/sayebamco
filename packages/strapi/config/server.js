module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 3500),
  // url: 'http://localhost/api',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '27a457d0f583910c0fe052e721637e1d'),
      // url: 'http://localhost/dashboard',
    },
  },
});
