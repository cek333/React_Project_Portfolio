import projectList from './projectList';

function Portfolio() {
  return (
    <main class="container">
      <p class="mt-3">Here are some projects I've worked on.</p>
      <section class="d-flex flex-wrap mb-3">
        {projectList.map((proj, idx) => {
          return (
            <div class="card col-md-6 col-lg-4 mb-1 mr-1">
              <div class="card-body">
                <h5 class="card-title">{proj.title}</h5>
                <p class="card-text">{proj.description}</p>
                <a href={proj.github} target="_blank" rel="noopener noreferrer" class="btn btn-primary mb-1">Github Link</a>
                <a href={proj.deployed} target="_blank" rel="noopener noreferrer" class="btn btn-primary mb-1">Deployed Project</a>
              </div>
              <img src={proj.img} class="card-img-bottom mt-2" alt="thumbnail of querySelector Quiz App" />
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default Portfolio;