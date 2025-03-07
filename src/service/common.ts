import { apiEndpoint } from '@/constants/common';
import { getToken, logout } from '@/helpers/auth';
import {notification} from "antd";

export const getData = async (response: Response) => {
  const responseData = await response.json();
  if (!response.ok) {
    // Redirect to login page if token is invalid
    if (response.status === 401) {
        logout();
    }

    notification.error({
        placement: 'topRight',
        message: responseData.message,
    });
    throw responseData;
  }
  return responseData.data;
};

export const commonClient = async (url: string, method: string, data?: any, excludeToken: boolean = false) => {
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
