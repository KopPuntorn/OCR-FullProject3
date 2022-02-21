import React from 'react';
import style from './header.module.css';
import image from '../Img/CS.jpg';

const Header = props => {
  return (
    
            <div className ={style.Header1}>
                    <div className ={style.Logo}> 
                    <img src={image} height={80}  />
                    </div>
                    <div className ={style.HeadText}>
                    </div>
                
                </div>
    
  );
};

export default Header;