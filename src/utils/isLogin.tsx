import {createContext, useContext, useState} from 'react';
import {Navigate, Outlet, useLocation} from 'umi';

export default () => {
   const value = userinfo();
   console.log('--value--', value);

   const location = useLocation();
   console.log('--跳转login前的地址--', location);

   if (!value?.currentUser) {
      return <Navigate to={'/login'} state={{replaceUrl: location}} replace={true} />;
   }
   return <Outlet />;
};

const UserinfoContext = createContext();

export function UsinfoProvider(children: any) {
   const [currentUser, setCurrentUser] = useState(null);

   const login = (currentUser: any, callback: any) => {
      setCurrentUser(currentUser);
      callback();
   };
   const logout = (callback: any) => {
      setCurrentUser(null);
      callback();
   };

   let value = {
      currentUser,
      login,
      logout,
   };
   return <UserinfoContext.Provider value={value} children={children} />;
}

export function userinfo() {
   return useContext(UserinfoContext);
}
