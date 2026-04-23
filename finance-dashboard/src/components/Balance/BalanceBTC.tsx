import { PriceBTC } from './PriceBTC';

interface BalanceBTCProps {
    priceBTC: number;
    priceUSD: number;
    cash: number;
}

export function BalanceBTC({ priceBTC, priceUSD, cash }: BalanceBTCProps) {
    return (
        <div>
            <span className="balance-label">SALDO EN BITCOIN (BTC)</span>
            <PriceBTC price={priceBTC} />
            <span className="balance-label">={priceUSD} USD | Cash: {cash}</span>
        </div>
    );
}