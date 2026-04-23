export type TypeOrder = "BUY" | "SELL";

export interface Order {
    type: TypeOrder,
    quantity: number
}