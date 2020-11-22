function Footer(props) {
  return (
    <footer class="bg-primary text-center py-2">
      <a href={props.links.linkedin} target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin fa-2x"></i></a>
      <a href={props.links.github} target="_blank" rel="noopener noreferrer"><i class="fab fa-github fa-2x"></i></a>
    </footer>
  )
}

export default Footer;