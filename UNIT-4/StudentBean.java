import java.io.Serializable;

public class StudentBean implements Serializable {
    private int rollNo;
    private String name;
    private String[] course;
    

    public StudentBean(){
        name="";
    }
    public int getRollNo(){
          return rollNo;
    }
    public void setRollNo(int rollNo){
        this.rollNo= rollNo;
    }
    public String getName(){
        return name;
    }
    public void setName(String name){
        this.name= name;
    }
    public String getCourse(int index){
         return course[index];
    }
    public void setCourse(int index, String course){
        this.course[index]= course;
    }
    public String[] getCourse(){
        return course;
    }
    public void setCourse(String[] courses){
        course= new String[10];
        for(int i=0; i<courses.length;i++){
            course[i]=courses[i];
        }
    }
}