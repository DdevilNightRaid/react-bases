import TodoList from "./components/TodoList";
// import TransformArray from "./components/TransfromArray";
import RepalceItems from "./components/ReplaceItems";
import FaultyUpdateArray from "./components/UpdatingArrays/FaultyUpdateArray";
import FixedUpdateArray from './components/UpdatingArrays/FixedUpdateArray'
import ImmerUpdateArray from "./components/UpdatingArrays/ImmerUpdateArray";
import Testing from "./components/Testing";
const App = () => {
  return (
    <>
      <TodoList />
      <hr />
      {/* <TransformArray /> */}
      <RepalceItems />
      <hr />
      <FaultyUpdateArray />
      <hr />
      <FixedUpdateArray />
      <hr />
      <ImmerUpdateArray />
      <hr />
      <Testing />
      <hr />
    </>
  )
}
export default App;