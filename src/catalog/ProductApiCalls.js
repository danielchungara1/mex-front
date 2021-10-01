import apiService from '../api/api-service';

export const getPage = async (_page = 1) => {

  const url = `/products?page=${_page}`;
  return (await apiService.get(url)).data;

};
