import './App.css'
import FollowMouse from './group-related-state/FollowMouse'
import WithOut from './avoid-contradiction-in-state/WithOut'
import WithRedundant from './avoid-redundant-state/WithRedundant'
import WithOutRedundant from './avoid-redundant-state/WithOutRedundant'
import WithDuplication from './avoid-duplication-in-state/WithDuplication'
import WithOutDuplication from './avoid-duplication-in-state/WithOutDuplication'
import Deeply from './avoid-deeply-nested-state/DeeplyNested/Deeply'
import NotDeeply from './avoid-deeply-nested-state/NotDeeply/NotDeeply'
function App() {

  return (
    <>
      <FollowMouse />
      <hr />
      <WithOut />
      <hr />
      <WithRedundant />
      <WithOutRedundant />
      <hr />
      <WithDuplication />
      <WithOutDuplication />
      <hr />
      <Deeply />
      <NotDeeply />
    </>
  )
}

export default App
