function Pizza(order_id, size, crust, sauce){
    Pizza.pizza_id++;
    alert(Pizza.pizza_id);
    this.order_id = order_id;
    this.crust = crust;
    this.size = size;
    this.sauce = sauce;
}