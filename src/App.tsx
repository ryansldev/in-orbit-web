import { Dialog } from './components/ui/dialog'
import { CreateGoal } from './components/create-goal'
import { EmptyGoals } from './components/empty-goals'
import { Summary } from './components/summary'

function App() {
  return (
    <Dialog>
      <Summary />
      {/* <EmptyGoals /> */}

      <CreateGoal />
    </Dialog>
  )
}

export default App
