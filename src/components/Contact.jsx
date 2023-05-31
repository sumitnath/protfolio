import React,{useState} from 'react'
import Vg from "../assets/vg.png"
import { toast } from 'react-hot-toast';
import {motion} from 'framer-motion'
import { addDoc,collection } from 'firebase/firestore';
import {db} from '../firebase'

const Contact = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");
  const [disableBtn, setDisableBtn] =useState(false);

  const submithandler = async(e)=> {
     e.preventDefault();
     setDisableBtn(true)
    console.log(name,email,message);
  try{
    await addDoc(collection(db,"contacts"),{
      name,
      email,
      message
        });
        setEmail("");
        setMessage('');
        setName("");
    toast.success("Message Sent ");
    setDisableBtn(false)
  } catch(error){
    toast.error("Error");
    console.log(error);
    setDisableBtn(false)
  }
};
const animations = {
  form:{
    initial:{
      x: "-100%",
      opacity:0,
    },
    whileInView:{
      x:0,
      opacity:1,
    },
  },
  button:{
    initial:{
      y: "-100%",
      opacity:0,
    },
    whileInView:{
      y:0,
      opacity:1,
    },
    transition:{
      delay:0.5
    }
  },
};

    return (
    <div id="contact">
    <section>

{/* To send form we have to use formsprre and remove submithandler  */}
    <motion.form  
    onSubmit ={submithandler} {...animations.form}>
<h2>Contact Me</h2>
<input type="text" required placeholder='Your Name'
 value={name} onChange={(e)=>setName(e.target.value)} name="name" />
<input type="email" required placeholder="Your Email"
 value={email} onChange={(e)=>setEmail(e.target.value)} name="email"/>
<input type="text" placeholder="Your Message" required
 value={message} onChange={(e)=>setMessage(e.target.value)} name="message"/>

 <motion.button  disabled={disableBtn}
 className={disableBtn ? "disableBtn" : ""}
type="submit"
{...animations.button}
>Send</motion.button>
</motion.form>
</section>
<aside>
<img src={Vg} alt="hh" />
</aside>      
    </div>
  )
}

export default Contact
