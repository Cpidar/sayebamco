module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 3500),
  url: 'http://sayebamco.com/api/',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '27a457d0f583910c0fe052e721637e1d'),
    //   url: "http://sayebamco.com/dashboard"
    },
    url: "http://sayebamco.com/dashboard/"
  },
});
