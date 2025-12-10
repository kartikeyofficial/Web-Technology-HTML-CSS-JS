import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;

@WebServlet("/getmessage")
public class GetMessageServlet extends HttpServlet{
    public void doGet(HttpServletRequest request,HttpServletResponse response)throws ServletException, IOException{
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        String name = request.getParameter("UserName");
        String age = request.getParameter("age");
        String message = request.getParameter("message");

        out.println("<html>");
        out.println("<body>");
        out.println("<h1>Details Sent by the user:</h1> ");
        out.println("<p><b>Name: </b>"+ name+"</p>");
        out.println("<p><b>Age:"+age+"</p>");
        out.println("<p><b>Message: "+message+"</p>");
        out.println("</body>");
        out.println("</html>");
    }
}
