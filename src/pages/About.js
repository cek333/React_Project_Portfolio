import profilePic from '../assets/images/cek_head_shot_v2_200x200_2020-09-14.jpg';

function About() {
  return (
    <main className="container text-center">
      <img className="img-fluid img-profile mb-1" src={profilePic} alt="head shot of Cecil" />
      <h2 className="profile-greeting">Hi, I'm Cecil!</h2>
      <p>I'm an aspiring web developer. In 2004 I graduated from the University of Toronto with a degree in Computer Engineering. In the following 16 years, I worked in the field of ASIC verification. In my spare time I've dabbled with Javascript, but in 2020 I decided to fully immerse myself in the world of full-stack web development by enrolling in the Coding Bootcamp co-hosted by the University of Toronto School of Continuing Studies and Trilogy Education Services.</p>
      <p>This page is one of the outcomes of that deep dive; it has been crafted to be responsive on various devices by adding Bootstrap to the HTML. On my <a href="./portfolio.html">Portfolio&nbsp;Page</a> you can check out additional projects I've worked on featuring HTML, CSS, Javascript, Node.js, React, Express and other web technologies.</p>
      <p>If you'd like to get in touch to discuss the awesome projects we can build together, I've outlined the ways you can reach me <a href="./contact.html">here</a>.</p>
    </main>
  )
}

export default About;