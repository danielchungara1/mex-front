import apiService from '../api/api-service';

export const getPage = async (filters = {}) => {

  let url = '/products';
  if (Object.keys(filters).length > 0) {
    url = url + `?${filtersToQueryParams(filters)}`;
  } 
  
  return (await apiService.get(url)).data;

};

/**
 * Aux function to conver query filter object to query param string
 * @param {*} filters param object
 * @returns query params string
 */
const filtersToQueryParams =  (filters = {}) => {
  let queryParams = "";
  // For every key into filters add => &key=value
  const arrayParams = Object.entries(filters);
  for (let i = 0; i < arrayParams.length; i++) {
    queryParams = queryParams + `&${arrayParams[i][0]}=${arrayParams[i][1]}`      
  }
  // Remove first & if exists...
  if (queryParams !== "") {
    queryParams = queryParams.slice(1);
  }
  return queryParams;
}