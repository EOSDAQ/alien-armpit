// TODO che - 추후 서버쪽 작업이 되면 연동해서 코드 변경 필요
const errorHandler = (error) => {
  const { response } = error;
  return Promise.reject(new Error(response.data));
};

export default errorHandler;
