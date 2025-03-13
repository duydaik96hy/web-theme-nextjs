export const saveToken = (token: string) => {
  localStorage.setItem('token', token);
};

export const saveCurrentUser = (currentUser: string) => {
  localStorage.setItem('currentUser', currentUser);
}

export const getToken = (): string => {
  return localStorage.getItem('token') || '';
};

export const isLogin = () => {
  const token = getToken();
  if (!token) {
    return false;
  }
  // const data = jose.decodeJwt(token);
  // if (data?.exp && data?.exp > Date.now() / 1000) {
  //   return true;
  // }
  return true;
};

export const isAdmin = () => {
  const currentUser = localStorage.getItem('currentUser');
  if (!currentUser) {
    return false;
  }
  const user = JSON.parse(currentUser);
  return (user.role === 'admin' || user.role === 'super') && user.type === 'staff';
}

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('currentUser');
  window.location.href = '/login';
};
