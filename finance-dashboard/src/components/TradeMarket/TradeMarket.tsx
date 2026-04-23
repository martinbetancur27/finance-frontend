export function TradeMarket() {
    return (
        <div id="trade-market">
            <h4>Operar Mercado</h4><br />
            <label>Inversion (USD)</label> <br />
            <input className="trade-input" type="number" placeholder="Monto en Dólares" /> <br />
            
            <label>Precio Actual BTC</label> <br />
            <input className="trade-input" type="number" placeholder="Precio en Dólares" /> <br />

            <label>Operación</label> <br />
            <select className="trade-select">
                <option value="buy">Comprar Bitcoin</option>
                <option value="sell">Vender Bitcoin</option>
            </select>
            <br />
            <button id="execute-order">Ejecutar Orden</button>
        </div>
    );
}