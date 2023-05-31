import React,{useRef} from 'react';
import {animate, motion} from 'framer-motion'
import TypewriterComponent from 'typewriter-effect';
import {BsArrowUpRight, BsChevronDown } from "react-icons/bs"
import me from '../assets/sumit.png'


const Home = () => {
 const clientCount = useRef(null);
 const projectCount = useRef(null)
 const animationClientsCount = ()=>{
  animate(0,100, {
  duration:1,
  onUpdate: (v)=>
  (clientCount.current.textContent = v.toFixed())
    } )
 }
 const animationProjectCount = ()=>{
  animate(0,500, {
  duration:1,
  onUpdate: (v)=>
  (projectCount.current.textContent = v.toFixed())
    } )
 }

  const animations = {
    h1:{
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button:{
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  }
 
  return (
    <div id="home">
    <section>
    <div>
    <motion.h1 {...animations.h1}>
    Hi, I am <br/> Sumit Nath
    </motion.h1>

    <TypewriterComponent 
    options={{
      strings: ["A Developer", "A Designer", "A Creator","A Coder", "A Programmer"],
      autoStart:true,
      loop: true,
      cursor: "",
      wrapperClassName: "typewriterpara",
    }}
    />

   <div>
   <a href="mailto:sumitnath.edu@gmail.com">Hire Me </a>
   <a href="#work">Projects <BsArrowUpRight/></a>
   </div>
    <article>
    <p>
    +<motion.span 
    whileInView={animationClientsCount}
    ref={clientCount}>100</motion.span>
    </p>
    <span> Clients Worldwide</span>
    </article>
    <aside>
      <article>
      <p>
      +<motion.span
      whileInView={animationProjectCount}
      ref={projectCount}
      >500</motion.span>
      </p>
      <span>Projects Made</span>
      </article>
      <article data-special>
      <p>
      Contact
      </p>
      <span>sumitnath.edu@gmail.com</span>
      </article>
    </aside>
    </div>
    </section>

    <section>
    <img src={me} alt="sumit" />
    </section>
    <BsChevronDown />
    </div>
  )
}

export default Home
