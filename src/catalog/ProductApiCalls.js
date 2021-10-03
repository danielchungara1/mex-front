import apiService from '../api/api-service';

export const getPage = async (queryParams = {}) => {

  const queryParamsToString =  (params = {}) => {
    let queryParams = "";
    // For every key into params add => &key=value
    const arrayParams = Object.entries(params);
    for (let i = 0; i < arrayParams.length; i++) {
      queryParams = queryParams + `&${arrayParams[i][0]}=${arrayParams[i][1]}`
    }
    return queryParams;
  }

  const url = `/products?${queryParamsToString(queryParams)}`;
  
  return (await apiService.get(url)).data;

};
