import './app-header.css'
import React, {useEffect,useState} from 'react';
const AppHeader = ()=>{
    useEffect(()=>{
        let tempMod = localStorage.getItem('tempMod');
        if(!tempMod){
            localStorage.setItem('tempMod', 'c');
        }
    },[])
    const tempChange = (target)=>{
        if(target === 'c'){
            localStorage.setItem('tempMod', 'c');
        }else{
            localStorage.setItem('tempMod', 'f');
        }
    }
    return(
        <div className='app-header'>
            <h1>INSTAWEATHER</h1>
            <div className='btn-container'>
                <div>
                    <button onClick={tempChange('c')}>C</button>
                </div>
                <div>
                    <button onClick={tempChange('f')}>F</button>
                </div>
            </div>
        </div>
    )
}

export default AppHeader;