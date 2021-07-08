import React, { useState } from 'react'
import ProgressBar from './components/progress-bar'
import { Flex, FlexItem } from './components/flex'
import Card from './components/card'
import Box from './components/box'
import Spacer from './components/spacer'
import ProgressBars from './widgets/progress-bars'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Flex alignItems='center' justifyContent='center' style={{ width: '100vw', minHeight: '100vh' }}>
        <div style={{ maxWidth: 'calc(100vw - 2rem)', width: '100%' }}>
          <Spacer />
          <ProgressBars />
          <Spacer />
        </div>
      </Flex>
    </div>
  )
}

export default App
