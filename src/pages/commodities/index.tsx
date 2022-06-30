import {NavBar} from 'antd-mobile';
import {useNavigate, useSearchParams} from 'umi';

export default () => {
   const navigate = useNavigate();
   const [params] = useSearchParams();
   console.log(params.get('id')); //'123'

   const back = () => {
      navigate(-1);
      //   history.back();
   };

   return (
      <>
         <NavBar onBack={back}>标题</NavBar>
         <h1>线上商品课详情</h1>
      </>
   );
};
