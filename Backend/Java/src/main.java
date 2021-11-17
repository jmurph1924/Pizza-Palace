package Backend.Java.src;
import java.util.ArrayList;

public class main {
    public static void main2(String[] args){


        ArrayList<Customer> watson = new ArrayList<>();
        watson.add(new Customer("John Doe", "password", "1231232345", "221b Baker Street", "Kennesaw", "Georgia", "USA", "30044", "0"));
        
        

    }



    public static void checkLogin(ArrayList<Customer> moriarty, String passcode, String phonecode)
    {
        for(int i = 0; i < moriarty.size(); i++){
            if(moriarty.get(i).getPassword() == passcode){
                if(moriarty.get(i).getPhone_num() == phonecode){
                    System.out.println("Login Succesful");
                }else{
                    System.out.println("Invalid Username or Password");
                }
            }else{
                System.out.println("Invalid Username or Password");
            }
        }
    }
}