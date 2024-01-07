// src/components/Tabs.js
import { useEffect, useState } from 'react';
import Description from './Page1/Description';
import MyPage from './page2/MainPage';
import SecondPage from './page3/Bigpage';
import Form from './Page1/Form';


const Tabs = () => {
  
  const [index, setIndex] = useState(0);
  const pages = [<Form/>, <SecondPage/>, <MyPage/>];

  useEffect(()=>{
		setIndex(1);
	}, [])

  return (
    <section>
      <div className='tabs'>
        <div onClick={() => setIndex(1)} className="tab">ACCEUIL</div>
        <div onClick={() => setIndex(2)} className="tab">À PROPOS</div>
        <div onClick={() => setIndex(0)} className="tab">CONTACT</div>
      </div>
      <div>
        { pages[index]}
      </div>
    </section>
  );
};





export default Tabs;
