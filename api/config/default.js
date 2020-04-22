module.exports = {
  host: 'localhost',
  port: process.env.NODE_ENV === 'test' ? 3031 : 3030,
  public: '../public/',
  paginate: {
    default: 10,
    max: 50,
  },
};
