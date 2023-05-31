import React from 'react'

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>
      <section>
      <TestimonialCard
      name={"Jeff Bezos."}
      feedback={"Your work is so good. Please to have you in our project"}
      />
      <TestimonialCard
      name={"Elon Musk."}
      feedback={"was satisfied with your work, love to work with you"}
      />
      <TestimonialCard
      name={"Tim Cook."}
      feedback={"Amazing and wonderful work. will surely conect in futire"}
      />
      </section>
    </div>
  )
}
const TestimonialCard =({name,feedback})=>(
<article>
<img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
<h4>{name}</h4>
<p>{feedback}</p>
</article>
)

export default Testimonial
