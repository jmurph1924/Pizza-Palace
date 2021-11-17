package Backend.Java.src;


public class Order {
    
    private String delivery_info;
    private boolean cash, check, credit;
    private int count;
    static int objcnt;

    Order(String delivery_info1, boolean cash1, boolean check1, boolean credit1){
        setCount(objcnt++);
        setCash(cash1);
        setCheck(check1);
        setCredit(credit1);
        setDelivery_info(delivery_info1);
    }

    public String getDelivery_info() {
        return delivery_info;
    }
    public void setDelivery_info(String delivery_info) {
        this.delivery_info = delivery_info;
    }
    public boolean isCash() {
        return cash;
    }
    public void setCash(boolean cash) {
        this.cash = cash;
    }
    public boolean isCheck() {
        return check;
    }
    public void setCheck(boolean check) {
        this.check = check;
    }
    public int getCount() {
        return count;
    }
    public void setCount(int count) {
        this.count = count;
    }
    public static int getObjcnt() {
        return objcnt;
    }
    public static void setObjcnt(int objcnt) {
        Order.objcnt = objcnt;
    }

    public boolean isCredit() {
        return credit;
    }

    public void setCredit(boolean credit) {
        this.credit = credit;
    }



}
