import { useEffect, useState } from 'react';
import { USER_INFO } from '../constants/ApiConstant';

export function useAccount() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  const userStorage = localStorage.getItem(USER_INFO) || null;

  useEffect(() => {
    if (userStorage) {
      const userInfo = JSON.parse(userStorage);
      setUser(userInfo);
      setIsLoggedIn(true);
      setRole(userInfo.role);
    } else {
      setUser(null);
      setIsLoggedIn(false);
      setRole(null);
    }
  }, [userStorage]);

  return { isLoggedIn, user, role };
}
