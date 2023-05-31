import React from 'react'
import {AiOutlineArrowUp,AiOutlineLinkedin,AiOutlineGithub,
AiOutlineInstagram,AiOutlineFacebook
} from "react-icons/ai"
const Footer = () => {
  return (
    <footer>
    <div>
      <img src="https://avatars.githubusercontent.com/u/38530675?v=4" 
      alt="devloper" />
      <h2>Sumit Nath</h2>
      <p>Motivation is temporary but descipline is permanent</p>
    </div>
    <aside>
    <h2>Social Media</h2>
      
    <article>
    <a href="https://www.instagram.com/sumitnathcoder/" target={"blank"}>
    <AiOutlineInstagram/>
    </a>
    <a href="https://github.com/sumitnath" target={"blank"}>
    <AiOutlineGithub/>
    </a> 
    <a href="https://www.linkedin.com/in/sumit-nath-b1a844187/" target={"blank"}>
    <AiOutlineLinkedin/>
    </a> 
    <a href="https://www.facebook.com/profile.php?id=100010093398325" target={"blank"}>
    <AiOutlineFacebook/>
    </a>   
    </article>
    </aside>
    <a href="#home">
    <AiOutlineArrowUp/>
    </a>
    </footer>
    )
}

export default Footer
