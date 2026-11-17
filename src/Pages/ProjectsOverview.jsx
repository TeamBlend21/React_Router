import { useParams } from 'react-router';
import Navbar from '../Components/Navbar';

const ProjectsOverview = () => {
    const params = useParams();

  return (
    <div>
        <Navbar />
        <h1>Projects Overview</h1>
        <p> This Project name is: <b>{params.id}</b></p>
    </div>
  )
}

export default ProjectsOverview