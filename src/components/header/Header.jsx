import React from 'react';
import Logo from "../../assets/img/Header/logo.svg";
import './Header.css'
import  basket from "../../assets/img/icons/header/basket.svg"
import favorite from "../../assets/img/icons/header/favorite.svg"
import  profile from "../../assets/img/icons/header/profile.svg"

export default function Header() {
  return (
    <div className='header'>
      <div className='header_content'>
        <div>
          <img src={Logo} alt="" />
        </div>

        <div className='header_menu'>
          <ul className='header_ul'>
            <li className='header_li'> <img  className='header_menu_img' src={basket} alt="" /> <a href="#">1205 руб.</a></li>
            <li className='header_li'> <img className='header_menu_img' src={profile} alt="" /> <a href="#">Закладки</a></li>
            <li className='header_li'> <img className='header_menu_img' src={favorite} alt="" /> <a href="#">Профиль</a></li>
          </ul>

        </div>
      </div>
    </div>
  )
}
