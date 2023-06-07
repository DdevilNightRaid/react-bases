import Button from './components/Button'
import AlertButton from './components/AlertButton'
import UploadButton from './components/UploadButton'

// Event Propagation 
import ToolBar from './event-propagation/ToolBar'

// Stop Propagation
import PToolBar from './stopping-propagation/PToolBar'

// Prevent Default 
import SignUp from './preventDefault/SignUp'
export default function App (){
  return (
    <>
      <Button />
      <AlertButton message="Play Movie">
        Play Movie
      </AlertButton>
      <AlertButton message="Play Music">
        Play Music
      </AlertButton>
      <UploadButton message='upload img'/>
      <ToolBar />
      <PToolBar />
      <SignUp />
    </>
  )
}