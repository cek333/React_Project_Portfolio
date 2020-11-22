import projectList from './projectList';
import Project from '../components/Project';

function Portfolio() {
  return (
    <main class="container">
      <p class="mt-3">Here are some projects I've worked on.</p>
      <section class="d-flex flex-wrap mb-3">
        {projectList.map((proj, idx) => <Project key={idx} proj={proj} />)}
      </section>
    </main>
  );
}

export default Portfolio;