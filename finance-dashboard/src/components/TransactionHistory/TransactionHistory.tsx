export function TransactionHistory(  ) {
    return (
        <div id="transaction-history">
            <h4>Historial de Movimientos</h4>
            <input type="text" placeholder="Buscar por categoría..." />
            <button id="clear-history">Limpiar Historial</button>

            <ul>
                <li className="transaction-item">
                    <span>Order buy</span>
                </li>
            </ul>
        </div>
    );
}