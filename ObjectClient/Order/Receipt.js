function Receipt(order_id, customer_id, total_cost){
    Receipt.receipt_id++
    alert(Receipt.receipt_id);
    this.order_id = order_id;
    this.customer_id = customer_id;
    this.total_cost = total_cost;
}