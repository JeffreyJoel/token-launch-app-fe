'use client'

import { useEffect, useState } from "react"
import { ArgentTMA, SessionAccountInterface } from "@argent/tma-wallet"

const initializeWallet = () => {
  return ArgentTMA.init({
    environment: "sepolia",
    appName: "MintDex",
    appTelegramUrl: "https://t.me/my_telegram_bot/app_name",
    sessionParams: {
      allowedMethods: [
        {
          contract: "0x036133c88c1954413150db74c26243e2af77170a4032934b275708d84ec5452f",
          selector: "increment",
        }
      ],
      validityDays: 90
    },
  })
}

export default function WalletConnect() {
  const [account, setAccount] = useState<SessionAccountInterface | undefined>()
  const [isConnected, setIsConnected] = useState<boolean>(false)
  const [argentTMA, setArgentTMA] = useState<ArgentTMA | null>(null)

  useEffect(() => {
    const wallet = initializeWallet()
    setArgentTMA(wallet)

    const connectWallet = async () => {
      try {
        const res = await wallet.connect()
        
        if (!res) {
          setIsConnected(false)
          return
        }

        const { account } = res
        
        if (account.getSessionStatus() !== "VALID") {
          setAccount(account)
          setIsConnected(false)
          return
        }

        const { callbackData } = res
        setAccount(account)
        setIsConnected(true)
        console.log("callback data:", callbackData)
      } catch (err) {
        console.error("Failed to connect", err)
      }
    }

    connectWallet()
  }, [])

  const handleConnectButton = async () => {
    if (!argentTMA) return
    await argentTMA.requestConnection("custom_callback_data")
  }

  const handleClearSessionButton = async () => {
    if (!argentTMA) return
    await argentTMA.clearSession()
    setAccount(undefined)
    setIsConnected(false)
  }

  return (
    <div className="py-4">
      {!isConnected && (
        <button
          onClick={handleConnectButton}
          className="px-4 py-3 bg-[#3ECF8E] bg-opacity-20 text-[#42dd97] rounded-2xl font-medium text-sm"
        >
          Connect Wallet
        </button>
      )}

      {isConnected && account && (
        <div className="space-y-4">
          <p className="font-medium">
            Account address: <code className="bg-gray-100 px-2 py-1 rounded">{account.address}</code>
          </p>
          <button
            onClick={handleClearSessionButton}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Clear Session
          </button>
        </div>
      )}
    </div>
  )
}