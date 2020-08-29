module.exports = ({ env }) => ({
  host: env('process.env.HOST', '0.0.0.0'),
  port: env.int(process.env.'PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '5d53296fae5e226d128181ab482d1652'),
    },
  },
});
