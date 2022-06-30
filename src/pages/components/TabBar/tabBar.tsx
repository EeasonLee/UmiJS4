import {TabBar} from 'antd-mobile';
import {
   AppOutline,
   MessageFill,
   MessageOutline,
   UnorderedListOutline,
} from 'antd-mobile-icons';
import {useLocation, useNavigate} from 'umi';

import styles from './tabBar.less';

const tabBar: React.FC = () => {
   const navigate = useNavigate();
   const location = useLocation();
   let {pathname} = location;
   if (pathname.indexOf('/', 2) > 0) {
      pathname = pathname.substring(0, pathname.indexOf('/', 2));
   }

   const tabs = [
      {
         key: '/home',
         title: '首页',
         icon: <AppOutline />,
      },
      {
         key: '/login',
         title: '我的待办',
         icon: <UnorderedListOutline />,
      },
      {
         key: '/user',
         title: '我的消息',
         icon: (active: boolean) => (active ? <MessageFill /> : <MessageOutline />),
      },
   ];
   return (
      <div className={styles.tabBar}>
         <TabBar
            activeKey={pathname}
            onChange={(value) => {
               if (pathname != value) {
                  navigate(value);
               }
            }}
         >
            {tabs.map((item) => (
               <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
            ))}
         </TabBar>
      </div>
   );
};

export default tabBar;
