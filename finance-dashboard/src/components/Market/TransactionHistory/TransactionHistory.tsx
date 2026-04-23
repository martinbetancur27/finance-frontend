import { Order } from "../../../types/Order";

export function TransactionHistory( { orders, setTradeAmount }: { orders: Order[], setTradeAmount: React.Dispatch<React.SetStateAction<Order[]>> } ) {
    return (
        <div id="transaction-history">
            <h4>Historial de Movimientos</h4>
            
            <button id="clear-history" onClick={() => setTradeAmount([])}>Limpiar Historial</button>

            <ul>
                {orders.map((order, index) => (
                    <li key={index} className="transaction-item">
                        <span className="transaction-type">{order.type === "BUY" ? "Compra" : "Venta"}</span>
                        <span className="transaction-quantity">Cantidad: {order.quantity} USD</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}