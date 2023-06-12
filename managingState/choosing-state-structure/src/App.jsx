import './App.css'
import FollowMouse from './group-related-state/FollowMouse'
import WithOut from './avoid-contradiction-in-state/WithOut'
import WithRedundant from './avoid-redundant-state/WithRedundant'
import WithOutRedundant from './avoid-redundant-state/WithOutRedundant'
import WithDuplication from './avoid-duplication-in-state/WithDuplication'
import WithOutDuplication from './avoid-duplication-in-state/WithOutDuplication'
function App() {

  return (
    <>
     <FollowMouse/>
     <hr />
     <WithOut/> 
     <hr />
     <WithRedundant/> 
     <WithOutRedundant/> 
     <hr />
     <WithDuplication/> 
     <WithOutDuplication/> 
     
    </>
  )
}

export default App
