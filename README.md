# Tug of War Game

A blockchain-based online tug-of-war game implemented with Solidity smart contracts and React frontend. Players can choose to support Team 1 or Team 2 by sending transactions to cheer for their team.

## Game Rules

1. Players connect their wallet to participate
2. Each player can choose to support either Team 1 or Team 2
3. Supporting a team requires sending a transaction
4. The rope position moves based on the cumulative score difference
5. A team wins when their score exceeds the other team by maxScoreDifference points
6. The game can be reset by the contract owner


## Project Architecture

- Smart Contract: Written in Solidity, based on Foundry framework
- Frontend: React + TypeScript + Wagmi + Viem
- Network: Monad Testnet

## Contract Features

- `pull(bool isTeam1)`: Cheer for the selected team
- `getWinStatus()`: Get current game status
- `reSet(uint8 _maxScoreDifference)`: Reset game (admin only)

## Quick Start

### Clone the Repository

```bash
git clone git@github.com:moonshotcommons/tug-war-game.git
cd tug-war-game
```

### Project Structure

```
├── contracts/
│   └── tug-war-contract/
│       ├── src/
│       │   └── TugWarContract.sol    # Main contract
│       └── test/
│           └── TugWarContract.sol    # Contract tests
├── src/
│   ├── App.tsx                       # Main game component
│   ├── wallets.tsx                   # Wallet connection component
│   ├── wagmi.ts                      # Wagmi configuration
│   └── index.css                     # Styles
└── package.json
```

### Contract Part

1. Install Foundry
```bash
curl -L https://foundry.paradigm.xyz | bash
foundryup
```

2. Install Dependencies
```bash
cd contracts/tug-war-contract
forge install
```

3. Run Tests
```bash
forge test
```

4. Deploy Contract
```bash
# Creating .env file and Setting environment variables
DEPLOYER_PRIVATE_KEY=your_private_key
MONAD=https://testnet-rpc.monad.xyz/

# Deploy to Monad testnet
forge create --rpc-url $MONAD \
    --private-key $DEPLOYER_PRIVATE_KEY \
    --broadcast \
    src/TugWarContract.sol:TugWarContract \
    --constructor-args your_owner_address
```

### Frontend Part

1. Install Dependencies
```bash
cd ../..  # Return to project root
pnpm install
```

2. Start Development Server
```bash
pnpm run dev
```

## Technical Details

### Smart Contract
- Written in Solidity 0.8.0
- Uses Foundry for development and testing
- Key state variables:
  - `ropePosition`: Current position of the rope (-5 to 5)
  - `team1Score` & `team2Score`: Current scores
  - `maxScoreDifference`: Points needed to win

### Frontend
- Built with React and TypeScript
- Uses Wagmi for Monad interactions
- Features:
  - Real-time score updates
  - Visual rope movement
  - Wallet connection management
  - Transaction status display

## Development Guide

### Modifying the Contract
1. Edit `contracts/tug-war-contract/src/TugWarContract.sol`
2. Run tests: `forge test`
3. Deploy changes: `forge create ...`
4. **Update frontend contract address**

### Modifying the Frontend
1. Components are in `src/`
2. Main game logic in `App.tsx`
3. Wallet connection in `wallets.tsx`
4. Styles in `index.css`


## License
MIT