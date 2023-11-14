import React, { useState } from "react"
import { Button } from "antd"

export default function App () {
  const [isConnected, setIsConnected] = useState(false)

  return (
    <Button onClick={handleButtonClick} className="zIndex999">
      {isConnected ? "Disconnect" : "Connect Wallet"}
    </Button>
  )

  function handleButtonClick () {
    setIsConnected(!isConnected)
  }
}
