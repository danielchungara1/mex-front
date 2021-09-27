import apiService from '../api/api-service';

export const getAll = async () => {

  const url = `/products`;
  return (await apiService.get(url)).data;

};
