import resume from '../assets/docs/Cecil_King_Resume.pdf';

function Contact(props) {
  return (
    <main class="container">
      <div class="row my-3">
        <div class="col-sm-3 contact-links">
          <p>
            <a href={props.links.linkedin} target="_blank" rel="noopener noreferrer" class="col-3">Linkedin <i class="fab fa-linkedin"></i></a>
          </p>
          <p>
            <a href={resume} target="_blank" rel="noopener noreferrer" class="col-3">Resume <i class="fas fa-file-pdf"></i></a>
          </p>
          <p>
            <a href={props.links.github} target="_blank" rel="noopener noreferrer" class="col-3">GitHub <i class="fab fa-github"></i></a>
          </p>
        </div>
        <iframe class="col-sm-7" title="contact form" src="https://docs.google.com/forms/d/e/1FAIpQLScvPngNyUd5C-30BwFkaf75jxd17y01bqBgJG_A20qnmDQ-vw/viewform?embedded=true" width="100%" height="890" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </div>
    </main>
  );
}

export default Contact;