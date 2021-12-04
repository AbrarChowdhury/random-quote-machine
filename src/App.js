import QuoteBox from './QouteBox';
import React,{useEffect, useState} from 'react'
import quotesList from './quotesList'
import colorList from './colorList';
function App() {
    const [quote,setQuote]=useState()
    const [color, setColor] = useState()
    const [state, setstate] = useState()
    
    const selectRandom = () => {
        const index = Math.floor(Math.random() * quotesList.length)
        setQuote(quotesList[index])
        setColor(colorList[ Math.floor(Math.random() * colorList.length) ])
    }

    const update = () => {
      setstate(!state)
    }
    
    
    useEffect(() => {
        selectRandom()
    }, [state])

  return (
    <div className="App" style={{background:color, height:"100vh", display:"grid",alignContent:"center", justifyContent:"center"}}>
      <QuoteBox quote={quote} update={update} color={color}/>
      <p style={{color:"white"}}>by abrar</p>
    </div>
  );
}

export default App;
