interface PriceBTCProps {
    price: number;
}

export function PriceBTC({ price }: PriceBTCProps) {
    return (
        <div>
            <span className="price-btc">${price} BTC</span>
        </div>
    );
}