import { depthManager } from "./depthManager";

const solInrMarket  = new depthManager("B-SOL_INR"); // Low liquidity

const usdtInrMarket  = new depthManager("B-USDT_INR"); // High Liquidity

const solusdtMarket  = new depthManager("B-SOL_USDT"); // Low Liquidity

setInterval(() => {
    console.log(solInrMarket.getRelevantDepths());
    console.log(usdtInrMarket.getRelevantDepths());
    console.log(solusdtMarket.getRelevantDepths());

    // We have 1SOL
    const canGetInr = solInrMarket.getRelevantDepths().lowestAsk - 0.001; //check
    const canGetUsdt = canGetInr/usdtInrMarket.getRelevantDepths().lowestAsk;
    const canGetSol = canGetUsdt/solusdtMarket.getRelevantDepths().lowestAsk;

    console.log(`You can convert 1SOL to ${canGetSol} SOL`);

    // Buy 1SOL from INR
    const intialInr = solInrMarket.getRelevantDepths().highestBid + 0.001;  //check
    const canGetUsdt2 = solusdtMarket.getRelevantDepths().highestBid;
    const finalInr = usdtInrMarket.getRelevantDepths().highestBid * canGetUsdt2;

    console.log(`You can convert ${intialInr}INR to ${finalInr}INR`);

}, 3000)