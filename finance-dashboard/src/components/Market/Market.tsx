import { Balance } from "../Balance/Balance";
import { TradeMarket } from "../TradeMarket/TradeMarket";
import { TransactionHistory } from "../TransactionHistory/TransactionHistory";

export function Market() {
    return (
        <div id="market">
            
            <div>
                <Balance />
                <TradeMarket />.
            </div>
            <TransactionHistory />
        </div>
    );
}