import React, {useState, useEffect }  from 'react'

export default function Blog() {
  const [count, setCount] = useState(0);
  const myStyle = {
    color: "white",
    backgroundColor: "blue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };
  
  useEffect(() => {
    document.title = `Pagina de blog`; 
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 2000);
  },[]);
  // daca ii scoatem parantezele patrate de array numara pana la infinit asa cu parantezele patrate [] numara doar de 2 ori
  
  return (
    <div style={myStyle}>Blog  {count}</div>
  )
}
