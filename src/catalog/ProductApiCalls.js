import apiService from '../api/api-service';

export const getPage = async (queryParams = {}) => {

  let url = '/products';
  if (Object.keys(queryParams).length > 0) {
    url = url + `?${queryParamsToString(queryParams)}`;
  } 
  
  return (await apiService.get(url)).data;

};

/**
 * Aux function to conver query param object to query param string
 * @param {*} query param object
 * @returns query params string
 */
const queryParamsToString =  (params = {}) => {
  let queryParams = "";
  // For every key into params add => &key=value
  const arrayParams = Object.entries(params);
  for (let i = 0; i < arrayParams.length; i++) {
    queryParams = queryParams + `&${arrayParams[i][0]}=${arrayParams[i][1]}`
  }
  return queryParams;
}