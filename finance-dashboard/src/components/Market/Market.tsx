import { Balance } from "../Balance/Balance";
import { TradeMarket } from "../TradeMarket/TradeMarket";
import { TransactionHistory } from "../TransactionHistory/TransactionHistory";
import Comment from "../Comments/Comment";
import React from "react";
import { Order } from "../../types/Order";

export function Market() {
    const [orders, setTradeAmount] = React.useState<Order[]>([]);
    return (
        <>
        <h1 id="market-title">Time for Trade</h1>
            <div id="market">
                <div>
                    <Balance />
                    <TradeMarket setTradeAmount={setTradeAmount}/>
                </div>
                <TransactionHistory orders={orders} setTradeAmount={setTradeAmount} />
            </div>

            <Comment />
        </>
    );
}