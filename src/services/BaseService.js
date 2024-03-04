export const BASE_URL = "https://random-data-api.com/api/v2/users";

export class BaseService {
  get = async (urlParams) => {
    const options = {
      method: "GET",
    };
    const request = new Request(BASE_URL + "?" + urlParams, options);
    const response = await fetch(request);
    return response.json();
  };
}
