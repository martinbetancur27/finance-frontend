import { Order } from "../../types/Order";
import { TypeOrder } from "../../types/Order";
import React from "react";
import { useFetch } from '../../hooks/useFetch';
import { BitcoinPriceResponse } from '../../types/BitcoinPriceResponse';

export function TradeMarket( { setTradeAmount }: { setTradeAmount: React.Dispatch<React.SetStateAction<Order[]>> } ) {
    const [operation, setOperation] = React.useState<TypeOrder>("BUY");
    const [amount, setAmount] = React.useState<number>(0);
    const { data, loading } = useFetch<BitcoinPriceResponse>('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
    return (
        <div id="trade-market">
            <h4>Operar Mercado</h4>
            <label className="trade-label">Inversion (USD)</label> 
            <input className="trade-input" type="number" placeholder="Monto en Dólares" value={amount} onChange={(e) => setAmount(Number(e.target.value))} /> 
            
            <label className="trade-label">Precio Actual BTC</label>
            <input className="trade-input" type="text" value={loading ? 'Cargando...' : data?.bitcoin?.usd ?? '-'} readOnly placeholder="Precio en Dólares" /> 

            <label className="trade-label">Operación</label> 
            <select className="trade-select" onChange={(e) => setOperation(e.target.value.toUpperCase() as TypeOrder)}>
                <option value="buy">Comprar Bitcoin</option>
                <option value="sell">Vender Bitcoin</option>
            </select>
            
            <button onClick={() =>
                setTradeAmount((prev) => [
                ...prev,{ type: operation, quantity: amount }])} id="execute-order">Ejecutar Orden</button>
        </div>
    );
}