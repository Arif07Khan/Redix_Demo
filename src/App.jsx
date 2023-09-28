import React from 'react'
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import { incNumberBy1,decNumberBy1, decNumberBy5, incNumberBy5,mulNumberBy2,mulNumberBy5,divNumberBy2,divNumberBy5,ResetNumber } from './actions/index'
import changeTheNumber from './reducers/upDown'



const App = () => {

  const myState = useSelector((state) => state.changeTheNumber)
  const dispatch = useDispatch()
  
  return (
    <div>
      <h1>React App With Redux</h1>
      <div className="container">
        <h1>Increment/Decrement Counter</h1>
        <h4>Using React & Redux</h4>
        <div className="quantity">
          <div className="box box_minus">
          <button className="quantity__minus_1" onClick={()=>{dispatch(decNumberBy1())}}>- By 1</button>
          <button className="mt10 quantity__minus_5" onClick={()=>{dispatch(decNumberBy5())}}>- By 5</button>
          </div>
          <div className=" box box_plus">
          <button className="quantity__plus_1" onClick={()=>{dispatch(incNumberBy1())}}>+ By 1</button>
          <button className="mt10 quantity__plus_5" onClick={()=>{dispatch(incNumberBy5())}}>+ BY 5</button>
          </div>
          <input name="quantity" type="text" className="quantity__input" value={myState}/>
          <div className=" box box_multiply">
          <button className="quantity__plus_1" onClick={()=>{dispatch(mulNumberBy2())}}>* By 2</button>
          <button className="mt10 quantity__plus_5" onClick={()=>{dispatch(mulNumberBy5())}}>* BY 5</button>
          </div>
          <div className=" box box_divide">
          <button className="quantity__plus_1" onClick={()=>{dispatch(divNumberBy2())}}>/ By 2</button>
          <button className="mt10 quantity__plus_5" onClick={()=>{dispatch(divNumberBy5())}}>/ BY 5</button>
          </div>
          </div>
      </div>
      <button className='mt10' onClick={()=>dispatch(ResetNumber())}>
        Reset ©
      </button>
    </div>
  )
}

export default App