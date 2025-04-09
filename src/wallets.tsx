import { useAccount, useConnect, useDisconnect, useSwitchChain } from 'wagmi'
import { monadTestnet } from 'wagmi/chains'

export function Wallets() {
  const account = useAccount()
  const { connectors, connect, status, error } = useConnect()
  const { disconnect } = useDisconnect()
  const { switchChain } = useSwitchChain()

  const handleConnect = async (connector: any) => {
    try {
      await connect({ 
        connector,
        chainId: monadTestnet.id 
      })
    } catch (err) {
      console.error('Connection error:', err)
    }
  }

  const handleSwitchChain = async () => {
    try {
      await switchChain({ chainId: monadTestnet.id })
    } catch (err) {
      console.error('Switch chain error:', err)
    }
  }

  return (
    <div className="wallet-container">
      <div className="wallet-section">
        <h2 className="wallet-title">Wallet Connection</h2>
        <div className="wallet-content">
          <div className="wallet-info">
            <div>Status: <span className="wallet-status">{account.status}</span></div>
            {account.chainId && (
              <div>
                Chain ID: <span className="wallet-chainid">{account.chainId}</span>
                {account.chainId !== monadTestnet.id && (
                  <button 
                    onClick={handleSwitchChain}
                    className="wallet-button switch"
                  >
                    Switch to Monad Testnet
                  </button>
                )}
              </div>
            )}
            {account.address && (
              <div>Address: <span className="wallet-address">
                {account.address.substring(0, 6)}...{account.address.substring(account.address.length - 4)}
              </span></div>
            )}
          </div>
          
          <div className="wallet-actions">
            {account.status === 'connected' ? (
              <button 
                className="wallet-button disconnect" 
                onClick={() => disconnect()}
              >
                Disconnect
              </button>
            ) : (
              <div className="wallet-connectors">
                {connectors.map((connector) => (
                  <button
                    key={connector.uid}
                    onClick={() => handleConnect(connector)}
                    className="wallet-button connect"
                  >
                    {connector.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        
        {status && <div className="wallet-status">{status}</div>}
        {error && <div className="wallet-error">{error.message}</div>}
      </div>
    </div>
  )
}