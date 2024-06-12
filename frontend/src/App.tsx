
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './routes/Signup';
import Signin from './routes/Signin';
import Blog from './routes/Blog';
import Blogs from './routes/Blogs';

import Appbar from './components/Appbar.tsx'
import Create from './routes/Create.tsx';
import { Landing } from './routes/Landing.tsx';
import { PrivateRoute } from './routes/ProtectedRoute.tsx';
import { MyBlogs } from './routes/MyBlogs.tsx';
function App() {

  return (
    <Router>
      <Appbar/>
      <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path="/signup"  element={<Signup/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/blog/*" element={ <PrivateRoute> <Blog /> </PrivateRoute>}/>
          <Route path="/blogs" element={ <PrivateRoute> <Blogs type ="all" /> </PrivateRoute>}/>
          <Route path="/myblogs" element={ <PrivateRoute> <MyBlogs /> </PrivateRoute>}/>
          <Route path="/create" element={ <PrivateRoute> <Create /> </PrivateRoute>}/>
      </Routes>
       
    </Router>
  )
}

export default App
