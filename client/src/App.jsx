import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Cards from './components/Cards'
import Projects from './pages/Projects'
import Resources from './pages/resources';

function App() {

  return (
    <Router>
      <Routes>
        <Route>
          <Route element = {<Projects/>} path='/projects'/>
          <Route element = {<Resources/>} path='/resources'/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
