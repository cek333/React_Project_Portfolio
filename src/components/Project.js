function Project(props) {
  return (
    <div class="card col-md-6 col-lg-4 mb-1 mr-1">
      <div class="card-body">
        <h5 class="card-title">{props.proj.title}</h5>
        <p class="card-text">{props.proj.description}</p>
        <a href={props.proj.github} target="_blank" rel="noopener noreferrer" class="btn btn-primary mb-1">Github Link</a>
        <a href={props.proj.deployed} target="_blank" rel="noopener noreferrer" class="btn btn-primary mb-1">Deployed props.project</a>
      </div>
      <img src={props.proj.img} class="card-img-bottom mt-2" alt="thumbnail of querySelector Quiz App" />
    </div>
  );
}

export default Project;