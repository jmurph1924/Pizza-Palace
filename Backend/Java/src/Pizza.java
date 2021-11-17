package Backend.Java.src;

public class Pizza {

    String size, crust, sauce;
    static int objcount;
    boolean pepperoni, sausage, chicken, peppers, garlic, onions, tomatoes_diced, black_olives;
    int pizzaid;

    Pizza(String size1, String crust1, String sauce1, boolean pepperoni1, boolean sausage1, boolean chicken1,
     boolean peppers1, boolean garlic1, boolean tomatoes_diced1, boolean black_olives1, boolean onions1){
         setPizzaid(objcount++);
         setSize(size1);
         setCrust(crust1);
         setSauce(sauce1);
         setPepperoni(pepperoni1);
         setSausage(sausage1);
         setChicken(chicken1);
         setPeppers(peppers1);
         setGarlic(garlic1);
         setTomatoes_diced(tomatoes_diced1);
         setBlack_olives(black_olives1);
         setOnions(onions1);
    }

    public String getSize() {
        return size;
    }
    public void setSize(String size) {
        this.size = size;
    }
    public String getCrust() {
        return crust;
    }
    public void setCrust(String crust) {
        this.crust = crust;
    }
    public String getSauce() {
        return sauce;
    }
    public void setSauce(String sauce) {
        this.sauce = sauce;
    }
    public static int getObjcount() {
        return objcount;
    }
    public static void setObjcount(int objcount) {
        Pizza.objcount = objcount;
    }
    public int getPizzaid() {
        return pizzaid;
    }
    public void setPizzaid(int pizzaid) {
        this.pizzaid = pizzaid;
    }

    public boolean isPepperoni() {
        return pepperoni;
    }

    public void setPepperoni(boolean pepperoni) {
        this.pepperoni = pepperoni;
    }

    public boolean isSausage() {
        return sausage;
    }

    public void setSausage(boolean sausage) {
        this.sausage = sausage;
    }

    public boolean isChicken() {
        return chicken;
    }

    public void setChicken(boolean chicken) {
        this.chicken = chicken;
    }

    public boolean isPeppers() {
        return peppers;
    }

    public void setPeppers(boolean peppers) {
        this.peppers = peppers;
    }

    public boolean isGarlic() {
        return garlic;
    }

    public void setGarlic(boolean garlic) {
        this.garlic = garlic;
    }

    public boolean isOnions() {
        return onions;
    }

    public void setOnions(boolean onions) {
        this.onions = onions;
    }

    public boolean isTomatoes_diced() {
        return tomatoes_diced;
    }

    public void setTomatoes_diced(boolean tomatoes_diced) {
        this.tomatoes_diced = tomatoes_diced;
    }

    public boolean isBlack_olives() {
        return black_olives;
    }

    public void setBlack_olives(boolean black_olives) {
        this.black_olives = black_olives;
    }
    

    
}
