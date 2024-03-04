
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './routes/Signup';
import Signin from './routes/Signin';
import Blog from './routes/Blog';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/signup"  element={<Signup/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/blog" element={<Blog/>} />
      </Routes>
       
    </Router>
  )
}

export default App
