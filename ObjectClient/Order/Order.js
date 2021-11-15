function Order(delivery_info, cash_card_credit){
    Order.order_id++;
    alert(Order.order_id);
    this.delivery_info = delivery_info;
    this.cash_card_credit = cash_card_credit;
}