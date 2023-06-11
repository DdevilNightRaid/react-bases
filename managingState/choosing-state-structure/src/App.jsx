import './App.css'
import FollowMouse from './group-related-state/FollowMouse'
import WithOut from './avoid-contradiction-in-state/WithOut'
import WithRedundant from './avoid-redundant-state/WithRedundant'
import WithOutRedundant from './avoid-redundant-state/WithOutRedundant'
function App() {

  return (
    <>
     <FollowMouse/>
     <hr />
     <WithOut/> 
     <hr />
     <WithRedundant/> 
     <WithOutRedundant/> 
    </>
  )
}

export default App
