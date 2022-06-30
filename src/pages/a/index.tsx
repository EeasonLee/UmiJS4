import {Link} from 'react-router-dom';

export default () => {
   const array = new Array(100).fill('123');
   return (
      <>
         {array.map((_, index) => (
            <div key={index}>
               <Link to="/commodities?id=123&name=tao">{index}查看商品详情</Link>
            </div>
         ))}
      </>
   );
};
