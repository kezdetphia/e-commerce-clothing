import {Routes, Route} from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component'
import PlayGround from './components/playground/playground.component';

const Shop = ()=>{
  return(
    <div>
      im the shop
    </div>
  )
}


const App = () => {
  return(

    <Routes>

      <Route path="/" element={<Navigation />} >
        <Route index element={<Home/> } />
        <Route path="shop" element={<Shop/> } />
        <Route path="sign-in" element={<SignIn/> } />
        <Route path="play" element={<PlayGround /> } />

      </Route>

    </Routes>




  

  )
}


export default App;