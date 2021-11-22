import React from 'react'
import About from './About'
import Projects from './Projects'
import Navbar from './Navbar'
import Skills from './Skills'
import Contact from './Contact'
// import axios from 'axios'

function App() {
  // React.useEffect(() => {
  //   const getData = async () => {
  //     const res = await axios.get('/api/endpoint') // * <-- replace with your endpoint
  //     console.log(res.data)
  //   }
  //   getData()
  // })

  return ( 
    <>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}

export default App
