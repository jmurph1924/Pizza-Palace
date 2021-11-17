package Backend.Java.src;

public class Customer {

    private String Name, password, phone_num, address, city, state, country, zipcode, order_num;
    private int count;
    static int objcnt;

    Customer(String name1, String Password1, String Phone_num1, String address1, String city1, String state1,String country1, String zipcode1, String order_num1)
    {
        setCount(objcnt++);
        setName(name1);
        setPhone_num(Phone_num1);
        setPassword(Password1);
        setAddress(address1);
        setCity(city1);
        setCountry(country1);
        setState(state1);
        setZipcode(zipcode1);
        setOrder_num(order_num1);
    }


    public String getName() {
        return Name;
    }
    public void setName(String name) {
        Name = name;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getPhone_num() {
        return phone_num;
    }
    public void setPhone_num(String phone_num) {
        this.phone_num = phone_num;
    }
    public int getCount() {
        return count;
    }
    public void setCount(int count) {
        this.count = count;
    }
    public String getAddress() {
        return address;
    }


    public void setAddress(String address) {
        this.address = address;
    }


    public String getCity() {
        return city;
    }


    public void setCity(String city) {
        this.city = city;
    }


    public String getState() {
        return state;
    }


    public void setState(String state) {
        this.state = state;
    }


    public String getCountry() {
        return country;
    }


    public void setCountry(String country) {
        this.country = country;
    }


    public String getZipcode() {
        return zipcode;
    }


    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }


    public String getOrder_num() {
        return order_num;
    }


    public void setOrder_num(String order_num) {
        this.order_num = order_num;
    }


    public static int getObjcnt() {
        return objcnt;
    }


    public static void setObjcnt(int objcnt) {
        Customer.objcnt = objcnt;
    }

    
}
