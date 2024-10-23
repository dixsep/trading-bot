
const request = require('request')
const crypto = require('crypto')

import {key, secret} from "./config";

const baseurl = "https://api.coindcx.com"


export const createOrder = (side : "buy" | "sell" , market : string, price : number, quantity : number, clientOrderId : string) => {

    const body = {
        "side": side,
        "order_type": "limit_order", //Toggle between a 'market_order' or 'limit_order'.
        "market": market, 
        "price_per_unit": price, //This parameter is only required for a 'limit_order'
        "total_quantity": quantity, //Replace this with the quantity you want
        "timestamp": Math.floor(Date.now()),
        "client_order_id": clientOrderId
    }

    const payload = new Buffer(JSON.stringify(body)).toString();
    const signature = crypto.createHmac('sha256', secret).update(payload).digest('hex')

    const options = {
        url: baseurl + "/exchange/v1/orders/create",
        headers: {
            'X-AUTH-APIKEY': key,
            'X-AUTH-SIGNATURE': signature
        },
        json: true,
        body: body
    }

    request.post(options, function(error : any, response : any, body : any) {

        if(error)
        {
            console.log("Error occured while Placing order");
        }
        else{
            console.log(`Order Placed Successfully`);
            console.log(body);
        }
        
    })

}

export const cancelOrder = () => {

    // Similar to create Order.

}