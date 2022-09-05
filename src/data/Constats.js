
import AbiToken from "../abi/AbiToken.json";
export const Global ={
    URL :'https://airdropbsc.xpacman.com'
}
export const walletProvider = {
    METAMASK: 'metaMask',
    TRUSTWALLET: 'trustWallet',
    SAFEPAL: 'safePal',
    WALLET_CONNECT: 'walletConnect'
};

//TESTNET
export const RPC_NODE_TESTNET={
    http:"https://apis.ankr.com/b2a3cdabe89d478f8f41e738832c92fb/9deca392b81a904bd9568c58d3f47228/binance/full/main",
    wss:"wss://apis.ankr.com/wss/b2a3cdabe89d478f8f41e738832c92fb/9deca392b81a904bd9568c58d3f47228/binance/full/main",
}

export const RPC_NODE={
    http:"https://apis.ankr.com/b2a3cdabe89d478f8f41e738832c92fb/9deca392b81a904bd9568c58d3f47228/binance/full/main",
    wss:"wss://apis.ankr.com/wss/b2a3cdabe89d478f8f41e738832c92fb/9deca392b81a904bd9568c58d3f47228/binance/full/main"
}

export const REF_AIRDROP={
   address:'0x0000000000000000000000000000000000000000',
   pool:'0x2eCF06c0B72ebf3185a114cbD471b6BB911f7841'
}


export const TOKEN_STAKE ={
    address:'0x9A3C7F233a666026b5c90097309BdBB9c5561ad9',
    abi: AbiToken
}
