import {Tabs} from 'antd-mobile';
import {useEffect} from 'react';
import {history, Outlet, useLocation, useNavigate} from 'umi';

import TabBar from '../components/TabBar/tabBar';
import styles from './index.less';

export default () => {
   const location = useLocation();
   const navigate = useNavigate();
   const {pathname} = location;
   useEffect(() => {
      if (pathname.indexOf('/', 2) == -1) {
         // navigate('/home/a')
         history.push('/home/a');
      }
   }, []);

   const tabItems = [
      {key: '/home/a', title: '第一项'},
      {key: '/home/b', title: '第二项'},
      {key: '/home/c', title: '第三项'},
   ];
   return (
      <>
         <div className={styles.tabsContainer}>
            <Tabs
               activeKey={pathname}
               onChange={(key) => {
                  navigate(key);
               }}
            >
               {tabItems.map((item) => (
                  <Tabs.Tab title={item.title} key={item.key} />
               ))}
            </Tabs>
         </div>
         <div>
            <Outlet />
         </div>
         <TabBar />
      </>
   );
};
