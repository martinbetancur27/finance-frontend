import { PriceBTC } from './PriceBTC';

interface BalanceBTCProps {
    priceBTC: number;
    priceUSD: number;
    cash: number;
}

export function BalanceBTC({ priceBTC, priceUSD, cash }: BalanceBTCProps) {
    return (
        <div>
            <span>SALDO EN BITCOIN (BTC)</span>
            <PriceBTC price={priceBTC} />
            <span>={priceUSD} USD | Cash: {cash}</span>
        </div>
    );
}