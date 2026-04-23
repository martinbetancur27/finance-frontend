import { BalanceBTC } from "./BalanceBTC";

export function Balance() {
    
    return (
        <div id="balance">
        <BalanceBTC  priceBTC={5} priceUSD={25000} cash={1000} />
        </div>
    );
}