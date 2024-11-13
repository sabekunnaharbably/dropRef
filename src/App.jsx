
import { useRef } from 'react'
import './App.css'
import Container from './components/Container'

function App() {

  let dropRef = useRef(null)

  let handleDrop = () => {

    // console.log(dropRef.current);

    // dropRef.current.style.display ="block"

    if (dropRef.current.style.display == "block") {
      dropRef.current.style.display = "none"
    }
    
    else{
      dropRef.current.style.display ="block"
    }

  }








  return (
    <>
      <Container className={"max-w-headerContainer"}>
        <div onClick={handleDrop}>
          <button className={"bg-orange-300 py-4 px-6 rounded-lg text-white mt-4 mb-4"}>Click</button>
          <div className="bg-emerald-300 p-6 hidden" ref={dropRef}>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Service</li>
            </ul>
          </div>
        </div>
      </Container>







    </>
  )
}

export default App
