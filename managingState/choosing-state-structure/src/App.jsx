import './App.css'
import FollowMouse from './group-related-state/FollowMouse'
import WithOut from './avoid-contradiction-in-state/WithOut'
import WithRedundant from './avoid-redundant-state/WithRedundant'
import WithOutRedundant from './avoid-redundant-state/WithOutRedundant'
import WithDuplication from './avoid-duplication-in-state/WithDuplication'
import WithOutDuplication from './avoid-duplication-in-state/WithOutDuplication'
import Deeply from './avoid-deeply-nested-state/DeeplyNested/Deeply'
import NotDeeply from './avoid-deeply-nested-state/NotDeeply/NotDeeply'
import Index from './challenge1/Index';
import C2Index from './challenge2/C2Index'
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
      <hr />
      <h2>Solved Challenge 1: </h2>
      <Index />
      <hr />
      <h2>Solved Challenge 1: </h2>
      <C2Index />
    </>
  )
}

export default App
