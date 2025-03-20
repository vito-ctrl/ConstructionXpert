import Projects from '../components/projects/Projects'
// import TaskList from '../components/tasks/TaskList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tasks from '../components/tasks/Tasks';

const Home = () => {
    return(
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Projects />}/>
          <Route path="/Tasks" element={<Tasks />}/>
      </Routes>
    </BrowserRouter>
    )
}

export default Home