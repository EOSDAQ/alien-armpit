// module.exports = {
//   url: 'http://localhost:3000',
//   staticPath: '/public',
//   tiffanyApi: 'http://ec2-13-124-118-0.ap-northeast-2.compute.amazonaws.com:18890/api/v1/eosdaq',
//   burgundyApi: 'http://ec2-13-124-118-0.ap-northeast-2.compute.amazonaws.com:18889/api/v1',
//   socketUrl: '/echo',
// };

const {
  BURGUNDY_API,
  TIFFANY_API,
} = process.env;

module.exports = {
  url: 'http://localhost:3000',
  staticPath: '/public',
  tiffanyApi: `${TIFFANY_API}/api/v1/eosdaq`,
  burgundyApi: `${BURGUNDY_API}/api/v1`,
  socketUrl: '/echo',
};
