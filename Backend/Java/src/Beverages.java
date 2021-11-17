package Backend.Java.src;

public class Beverages {
    private int coke, dr_pepper, seven_up, bargs, sweet_tea, diet_tea, water;

    Beverages(int coke1, int dr_pepper1, int seven_up1, int bargs1, int sweet_tea1, int diet_tea1, int water1){
        setCoke(coke1);
        setDr_pepper(dr_pepper1);
        setSeven_up(seven_up1);
        setBargs(bargs1);
        setSweet_tea(sweet_tea1);
        setDiet_tea(diet_tea1);
        setWater(water1);
    }

    public int getCoke() {
        return coke;
    }

    public void setCoke(int coke) {
        this.coke = coke;
    }

    public int getDr_pepper() {
        return dr_pepper;
    }

    public void setDr_pepper(int dr_pepper) {
        this.dr_pepper = dr_pepper;
    }

    public int getSeven_up() {
        return seven_up;
    }

    public void setSeven_up(int seven_up) {
        this.seven_up = seven_up;
    }

    public int getBargs() {
        return bargs;
    }

    public void setBargs(int bargs) {
        this.bargs = bargs;
    }

    public int getSweet_tea() {
        return sweet_tea;
    }

    public void setSweet_tea(int sweet_tea) {
        this.sweet_tea = sweet_tea;
    }

    public int getDiet_tea() {
        return diet_tea;
    }

    public void setDiet_tea(int diet_tea) {
        this.diet_tea = diet_tea;
    }

    public int getWater() {
        return water;
    }

    public void setWater(int water) {
        this.water = water;
    }

    
}
