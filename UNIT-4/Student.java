public class Student {
    public static void main(String[] args) {
        StudentBean student = new StudentBean();

        student.setName("Kumar Kartikey");
        student.setRollNo(73);

        String[] courses = {"WT","DBMS","DAA","DA","ASC"};
        student.setCourse(courses);

        System.out.println(student.getName());
        System.out.println(student.getRollNo());
        String[] retCourses= student.getCourse();
        for(int i=0;i<courses.length;i++){
            
            System.out.println(retCourses[i]);
        student.setCourse(2,"COI");
        System.out.println("\nCourse At Index 2:");
        System.out.println(student.getCourse(2));
        }

    }
    
}
