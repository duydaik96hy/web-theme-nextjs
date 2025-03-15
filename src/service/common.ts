import { apiEndpoint } from '@/constants/common';
import { getToken, logout } from '@/helpers/auth';

export const getData = async (response: Response) => {
  const responseData = await response.json();
  if (!response.ok) {
    // Redirect to login page if token is invalid
    if (response.status === 401) {
        logout();
    }

    // notification.error({
    //     placement: 'topRight',
    //     message: responseData.message,
    // });
    throw responseData.message;
  }
  return responseData.data;
};

export const commonClient = async (url: string, method: string, data?: unknown, excludeToken: boolean = false) => {
    const token = excludeToken ? '' : getToken() || '';

    const headers = {
        'Content-Type': 'application/json',
        'Access-Token': token,
    };

    const options = {
        method,
        headers,
        body: JSON.stringify(data),
    };

    const response = await fetch(apiEndpoint + url, options);
    return await getData(response);
}
