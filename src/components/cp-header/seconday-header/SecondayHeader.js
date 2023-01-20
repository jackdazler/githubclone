import React from 'react'
import styleSecondayHeader from './secondayHeader.module.scss';
const SecondayHeader = () => {
  return (
    <div className={`${styleSecondayHeader['cp-sec-header']} container`}>
        <div className={styleSecondayHeader['head-wrap']}>
            <ul  className={styleSecondayHeader['left-wrap']}>
                <li  className={styleSecondayHeader['status']}></li>
                <li  className={styleSecondayHeader['status-open']}>625 open</li>
                <li  className={styleSecondayHeader['status-done']}>10,104 closed</li>
            </ul>
            <ul  className={styleSecondayHeader['right-wrap']}>
                <li  className={styleSecondayHeader['nav-link']}>Author</li>
                <li  className={styleSecondayHeader['nav-link']}>Label</li>
                <div  className={styleSecondayHeader['nav-link']}>Label</div>
                <li  className={styleSecondayHeader['nav-link']}>Projects</li>
            </ul>
        </div>
    </div>
  )
}

export default SecondayHeader