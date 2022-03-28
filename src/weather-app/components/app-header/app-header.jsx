import './app-header.css'
import React, {useEffect,useState} from 'react';
const AppHeader = (props)=>{
    const [tempVar,setTempVar]=useState('');
    useEffect(()=>{
        console.log();
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
        setTempVar(target);
        props.tempVarFun(target);
        console.log("ya",target,localStorage.getItem('tempMod'));
    }
    return(
        <div className='app-header'>
            <h1>INSTAWEATHER</h1>
            <div className='btn-container'>
                <div>
                    <button className={localStorage.getItem('tempMod') === 'c' ? 'active' : ''} onClick={() => tempChange('c')}>C</button>
                </div>
                <div>
                    <button className={localStorage.getItem('tempMod') === 'f' ? 'active' : ''} onClick={() => tempChange('f')}>F</button>
                </div>
            </div>
        </div>
    )
}

export default AppHeader;