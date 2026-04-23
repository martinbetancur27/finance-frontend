export function TradeMarket() {
    return (
        <div className="trade-market">
            <h4>Operar Mercado</h4>
            <label>Inversion (USD)</label>
            <input type="number" placeholder="Monto en Dólares" />
            
            <label>Precio Actual BTC</label>
            <input type="number" placeholder="Precio en Dólares" />

            <label>Operación</label>
            <select>
                <option value="buy">Comprar Bitcoin</option>
                <option value="sell">Vender Bitcoin</option>
            </select>

            <button>Ejecutar Orden</button>
        </div>
    );
}