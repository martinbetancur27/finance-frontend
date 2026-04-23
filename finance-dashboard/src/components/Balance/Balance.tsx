import { BalanceBTC } from "./BalanceBTC";

export function Balance() {
    return (
        <BalanceBTC priceBTC={50000} priceUSD={50000} cash={1000} />
    );
}