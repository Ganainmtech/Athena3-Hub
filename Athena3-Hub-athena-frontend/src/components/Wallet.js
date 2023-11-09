import { useState, useEffect } from "react"
import { PeraWalletConnect } from "@perawallet/connect"
import { Button } from 'antd';

const peraWallet = new PeraWalletConnect()

export default function App () {
  const [accountAddress, setAccountAddress] = useState(null)
  const isConnectedToPeraWallet = !!accountAddress

  useEffect(() => {
    // Reconnect to the session when the component is mounted
    peraWallet
      .reconnectSession()
      .then((accounts) => {
        peraWallet.connector.on("disconnect", handleDisconnectWalletClick)

        if (accounts.length) {
          setAccountAddress(accounts[0])
        }
      })
      .catch((e) => console.log(e))
  }, [])

  return (
    <Button
      onClick={
        isConnectedToPeraWallet
          ? handleDisconnectWalletClick
          : handleConnectWalletClick
      }
      className="zIndex999"
    >
      {isConnectedToPeraWallet ? "Disconnect" : "Connect Wallet"}
    </Button>
  )

  function handleConnectWalletClick () {
    peraWallet
      .connect()
      .then((newAccounts) => {
        peraWallet.connector.on("disconnect", handleDisconnectWalletClick)

        setAccountAddress(newAccounts[0])
      })
      .catch((error) => {
        if (error?.data?.type !== "CONNECT_MODAL_CLOSED1") {
          console.log(error)
        }
      })
  }

  function handleDisconnectWalletClick () {
    peraWallet.disconnect()

    setAccountAddress(null)
  }
}
