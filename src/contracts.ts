export const wagmiContractConfig = {
    // address: '0xB6F5675C778B9F3978862bDA5A97fB5c4757B946',
    address: '0x75fE5634fD83fcbac1837668B6c402eb68A36359',
    abi: [
        {
            type: 'constructor',
            inputs: [
                {
                    name: '_owner',
                    type: 'address',
                    internalType: 'address'
                }
            ],
            stateMutability: 'nonpayable'
        },
        {
            type: 'function',
            name: 'getWinStatus',
            inputs: [],
            outputs: [
                {
                    name: '',
                    type: 'uint8',
                    internalType: 'uint8'
                }
            ],
            stateMutability: 'view'
        },
        {
            type: 'function',
            name: 'maxScoreDifference',
            inputs: [],
            outputs: [
                {
                    name: '',
                    type: 'uint8',
                    internalType: 'uint8'
                }
            ],
            stateMutability: 'view'
        },
        {
            type: 'function',
            name: 'owner',
            inputs: [],
            outputs: [
                {
                    name: '',
                    type: 'address',
                    internalType: 'address'
                }
            ],
            stateMutability: 'view'
        },
        {
            type: 'function',
            name: 'pull',
            inputs: [
                {
                    name: 'isTeam1',
                    type: 'bool',
                    internalType: 'bool'
                }
            ],
            outputs: [],
            stateMutability: 'nonpayable'
        },
        {
            type: 'function',
            name: 'reSet',
            inputs: [
                {
                    name: '_maxScoreDifference',
                    type: 'uint8',
                    internalType: 'uint8'
                }
            ],
            outputs: [],
            stateMutability: 'nonpayable'
        },
        {
            type: 'function',
            name: 'ropePosition',
            inputs: [],
            outputs: [
                {
                    name: '',
                    type: 'int8',
                    internalType: 'int8'
                }
            ],
            stateMutability: 'view'
        },
        {
            type: 'function',
            name: 'team1Score',
            inputs: [],
            outputs: [
                {
                    name: '',
                    type: 'uint8',
                    internalType: 'uint8'
                }
            ],
            stateMutability: 'view'
        },
        {
            type: 'function',
            name: 'team2Score',
            inputs: [],
            outputs: [
                {
                    name: '',
                    type: 'uint8',
                    internalType: 'uint8'
                }
            ],
            stateMutability: 'view'
        }
    ]
  } as const