package Backend.Java.src;

public class CreditCard {
    
    private String name, exp_date, cvc, card_num;
    private boolean mastercard, visa;
    private int cust_num;

    CreditCard(String name1, String exp_date1, String cvc1, String card_num1, boolean mastercard1, boolean visa1, int cust_num1){
        setName(name1);
        setExp_date(exp_date1);
        setCvc(cvc1);
        setCard_num(card_num1);
        setMastercard(mastercard1);
        setVisa(visa1);
        setCust_num(cust_num1);
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getExp_date() {
        return exp_date;
    }
    public void setExp_date(String exp_date) {
        this.exp_date = exp_date;
    }
    public String getCvc() {
        return cvc;
    }
    public void setCvc(String cvc) {
        this.cvc = cvc;
    }
    public String getCard_num() {
        return card_num;
    }
    public void setCard_num(String card_num) {
        this.card_num = card_num;
    }
    public boolean isMastercard() {
        return mastercard;
    }
    public void setMastercard(boolean mastercard) {
        this.mastercard = mastercard;
    }
    public boolean isVisa() {
        return visa;
    }
    public void setVisa(boolean visa) {
        this.visa = visa;
    }
    public int getCust_num() {
        return cust_num;
    }
    public void setCust_num(int cust_num) {
        this.cust_num = cust_num;
    }







    

}
