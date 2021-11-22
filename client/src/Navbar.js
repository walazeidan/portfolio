import React from 'react'

const Navbar = () => {

  // const [ scrolled, setScrolled ] = useState(false)

  // const handleScroll = () => {
  //   const offset = window.scrollY
  //   if (offset > 200 ){
  //     setScrolled(true)
  //   } else {
  //     setScrolled(false)
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll',handleScroll)
  // })
  // const navbarClasses = ['navbar']
  // if (scrolled){
  //   navbarClasses.push('scrolled')
  // }



  return (
    <div className="navbar sticky-top">
      <div className="links">
        <a href="#about">Get to know me</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  )

}

export default Navbar