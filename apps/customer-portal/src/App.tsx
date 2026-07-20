import { Button } from "@repo/ui"
import { formatCurrency } from "@repo/utils"

function App() {

  return (
    <>
      <h1>
        Custom
      </h1>
      <Button onClick={() => alert(formatCurrency(1000))} />
        Test
    </>
  )
}

export default App
