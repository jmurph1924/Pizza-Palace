function Customer(phone_num, name, password){
    Customer.c_id++;
    alert(Customer.c_id);
    this.name = name;
    this.phone_num = phone_num;
    this.password = password;
    this.online = false;
    order_id  = [];
}

Customer.c_id = 0;

Customer.prototype.login = function(){
    this.online = true;
    console.log(this.email, 'has logged in');
};

Customer.prototype.logout = function(){
    this.online = false;
    console.log(this.email, 'has logged out');
};