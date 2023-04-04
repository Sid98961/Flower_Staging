import React, {useEffect, useState} from 'react'
import  rosee from './images/rosee.jpg'
import ro from './images/sid--img.jpg'
// import rot from './images/sid2.jpg'
import './index.css';
function App() {
    const [res,setRes]=useState(null);
    const [res2,setRes2]=useState(null);
    const [res3,setRes3]=useState(null);
    const [z,setZ]=useState(null);
    const [res4,setRes4]=useState(null);
    const [res5,setRes5]=useState(null);
    function getData(val){
            setRes(val.target.value);
    }
    function getMata(val){
        setRes2(val.target.value);
    }
    function getRata(val){
        setRes3(val.target.value);
    }
    function getJata(val){
        setRes4(val.target.value);
    }
    function getNata(val){
        setRes5(val.target.value);
    }
useEffect(()=>{
    if(res==='A')
    setZ('Sepals');
    if(res==='A' && res2==='B'){
    setZ('Petals');
    }
    if(res==='B' && res2==='C')
    setZ('Stamen/Androcium');
    if(res==='C' && res2==='C'){
    setZ('Carpels/Gynocium');
   
    }
},[res2,res]);
useEffect(()=>{
    if(res3==='yes' || res3==='YES'){
        setRes3('Whorl-1 Gynoecium/Carpel Whorl-2 Stamen/Androecium Whorl-3 Stamen Whorl-4 Carpel/Gynoecium')
    }
})
useEffect(()=>{
    if(res4==='yes' || res4==='YES'){
        setRes4('Whorl-1 Sepal Whorl-2 Sepal Whorl-3 Carpel/Gynoecium Whorl-4 Carpel/Gynoecium')
    }
})
useEffect(()=>{
    if(res5==='yes' || res5==='YES'){
        setRes5('Whorl-1 Sepal Whorl-2 Petal  Whorl-3 Petal Whorl-4 Sepal ')
    }
})
  return (
    <>
    <div className='bg'> 
    <div className='design'>
    
    <h1 style={{textAlign: 'center', padding: '0px',margin: '0px'}}> Flower Staging</h1>
    <div style={{textAlign: 'center'}}>
            <div>
                <h2>Type Of Homeotic Gene</h2>
                <input className='des' type='text' onChange ={getData} />  
            </div>
            <form>
                <h2>Type Of Homeotic Gene</h2>
                <input className='des' type='text' onChange ={getMata} />  
                
            </form>
            <form>
                <h2>Organ:</h2>
                <input className='des' type='text' value ={z} />
            </form>
                
            {/* <img src={rosee} alt="rosee" /> */}
            <form> 
                <h2>Mutation in gene A:</h2>
                <input className='des' type='text' onChange ={getRata} />
            </form>
            <form> 
                <h2> {res3}</h2>
            </form>
            <form> 
                <h2>Mutation in gene B:</h2>
                <input className='des' type='text' onChange ={getJata} />
            </form>
            <form> 
                <h2> {res4}</h2>
            </form>
            <form> 
                <h2>Mutation in gene C:</h2>
                <input className='des' type='text' onChange ={getNata} />
            </form>
            <form> 
                <h2> {res5}</h2>
            </form>
         <h2> Crafted by Sidharth(IIT BHU)</h2>
    </div>
    </div>
    </div>
    </>
  )
}

export default App;