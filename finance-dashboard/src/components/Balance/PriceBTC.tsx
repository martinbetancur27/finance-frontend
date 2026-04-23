interface PriceBTCProps {
    price: number;
}

export function PriceBTC({ price }: PriceBTCProps) {
    return (
        <div>
            <span>${price} BTC</span>
        </div>
    );
}