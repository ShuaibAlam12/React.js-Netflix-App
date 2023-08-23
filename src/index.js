import React from 'react';
import ReactDOM from 'react-dom';

import Card from './Cards';
import css from './index.css'
import Sdata from './Sdata'


ReactDOM.render(
  <>
    <h1 className='heading_style  '>List of Top 6 Netflix Series </h1>

    {Sdata.map((val) => {
      return (
        <Card
          imgsrc={val.imgsrc}
          sname={val.sname}
          slink={val.slink}
          Title={val.Title}

        />)
    })};
    <footer className='alam'>
       <hr className="footer-divider"></hr>
        <p>&copy;Made by Shuaib with Love 💗 2023</p>
    </footer>
    
  </>
  , document.getElementById('root'));
  // const myname =(a,b) => a+b;        Fat arrow function
