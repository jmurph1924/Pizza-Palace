package Backend.Java.src;
import java.util.ArrayList;
import java.io.*;

public class mainsystem {
    public static void main(String[] args) throws FileNotFoundException {


        ArrayList<Customer> watson = new ArrayList<>();
        watson.add(new Customer("John Doe", "password", "1231232345", "221b Baker Street",
                "Kennesaw", "Georgia", "USA", "30044", "0"));
        watson.add(new Customer("Tony Stark", "password", "1231232345", "221b Baker Street",
                "Kennesaw", "Georgia", "USA", "30044", "12"));

        ArrayList<Customer> sherlock = new ArrayList<>();

        writerCustomer(watson);
        sherlock = readingCustomer();


        for(int i = 0; i < sherlock.size(); i++) {
            System.out.println(sherlock.get(i).toString());
        }
    }

    public static void writerCustomer(ArrayList<Customer> moriarty){
        try{
            FileOutputStream fos = new FileOutputStream("Customer.txt");
            ObjectOutputStream oos = new ObjectOutputStream(fos);
            oos.writeObject(moriarty);

            oos.close();
            fos.close();

        }catch(IOException ex) {
            return;
        }
    }

    public static ArrayList<Customer> readingCustomer(){
        ArrayList<Customer> John= new ArrayList<>();
        try{

        FileInputStream fis = new FileInputStream("Customer.txt");
        ObjectInputStream ois = new ObjectInputStream(fis);

        John = (ArrayList<Customer>) ois.readObject();

        ois.close();
        fis.close();
        }catch(IOException | ClassNotFoundException ex) {
            System.out.println("Ooops");
        }
        return John;
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