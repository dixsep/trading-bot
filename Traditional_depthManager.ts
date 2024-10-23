
export const pollMarket = async (market : string)  => {

    const res = await fetch(`https://public.coindcx.com/market_data/orderbook?pair=${market}`);

    const depth  = await res.json();

    const bids : {
        [key : string] : string
    } = depth.bids;

    const asks : {
        [key : string] : string
    } = depth.asks;

    return {bids, asks};
}

export const relevantDepths = async (market : string) => {

    const res = await fetch(`https://public.coindcx.com/market_data/orderbook?pair=${market}`);

    const depth  = await res.json();

    const bids : {
        [key : string] : string
    } = depth.bids;

    const asks : {
        [key : string] : string
    } = depth.asks;

    let highestBid : number = -1; let lowestAsk : number = 1000000;

    Object.keys(bids).map(x => {
        if(parseFloat(x) > highestBid)
        {
            highestBid = parseFloat(x);
        }
    })

    Object.keys(asks).map(x => {
        if(parseFloat(x) < lowestAsk)
        {
            lowestAsk = parseFloat(x);
        }
    })

    return {
        HighBid : highestBid,
        LowAsk : lowestAsk
    }
}