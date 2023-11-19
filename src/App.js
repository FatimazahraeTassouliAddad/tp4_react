
import './index.css';
import { useState,useEffect} from 'react' ;
import axios from 'axios' ;

function App() {
  const [dataArray, setDataArray] = useState ([]) ;

const [page, setPage] = useState (1) ;
 
useEffect (() => {
 axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`)
 .then ( (response) =>
 {setDataArray (response .data) })
}, [page])

const prev = () => {
  setPage (page + 1)
}
const next = () => {
if (page > 1) {
  setPage (page - 1)
  }
}
return (
<center>
<div className="container" >

  <h1 className='titre'> API TP TXTE </h1>

  <ul>
       {dataArray.map((el,id)=>( <li>{el.title}</li>))}
   </ul>
   <button className='css' onClick={prev}> Previous</button>
   <button className='css1' onClick={next}> Next</button>
   </div>
</center>
)
}

export default App ;
