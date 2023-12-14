import static org.apache.commons.io.FilenameUtils;
import org.apache.commons.fileupload.FileItem;
import javax.servlet.http.Cookie;
import static org.apache.commons.io.FilenameUtils;

class MyBadImplementation extends java.security.MessageDigest {

}

class Connector1 {
    @javax.jws.WebMethod
    void connect(HttpServletRequest req){
        HttpServletResponse res = new HttpServletResponse();
        res.setHeader("Access-Control-Allow-Origin", "*");
    }
}

import javax.servlet.Filter;
public class HttpRequestDebugFilter implements Filter {
    public void doFilter(ServletRequest request) throws IOException,
        ServletException {
            if (request instanceof HttpServletRequest) {
            javax.crypto.Cipher.getInstance("/CBC/PKCS5Padding")
        }
    }
}

@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http.csrf().ignoringAntMatchers("/route/fre");
  }
}

class Connector2 {
    @javax.jws.WebMethod
    void connect(HttpServletRequest req){
        SymmetricEncryptionConfig sec = new com.hazelcast.config.SymmetricEncryptionConfig();
    }
}

class Connector3 {
    void connect(HttpServletRequest req){
        javax.servlet.http.Cookie cookie = new Cookie("cookie")
        HttpServletResponse res = new HttpServletResponse();
        res.addCookie(cookie);
    }
}

class Connector4 {
    @javax.jws.WebMethod
    void connect(HttpServletRequest req){
        javax.crypto.Cipher.getInstance("DES/CBC/NoPadding");
    }
}

class Connector5 {
    @javax.jws.WebMethod
    void connect(HttpServletRequest req){
        Keygen keygen = javax.crypto.KeyGenerator.getInstance("Blowfish");
        keygen.init(100);
    }
}

class Connector6 {
    @javax.jws.WebMethod
    void connect(HttpServletRequest req){
          javax.servlet.http.Cookie cook = new Cookie("cookie");
          cook.setSecure(false);
          req.addCookie(cook);
    }
}


class Connector7 {
    @javax.jws.WebMethod
    void connect(HttpServletRequest req){
        Cookie cook = new Cookie("cookie");
        cook.setMaxAge(31536000);
    }
}

class Connector8 {
    void connect(HttpServletRequest req){
        java.nio.file.Files.createTempDirectory("file");
    }
}

public class WeakNightVoter implements AccessDecisionVoter {
    @Override
    public int vote(Authentication authentication, Object object, Collection collection) {  // Noncompliant
      Calendar calendar = Calendar.getInstance();
      int currentHour = calendar.get(Calendar.HOUR_OF_DAY);
      return ACCESS_ABSTAIN; // Noncompliant
    }
}

class Connector9 {
    @javax.jws.WebMethod
    void connect(HttpServletRequest req){
        Cookie cook = new Cookie("cookie");
        for (Cookie cookie : req.getCookies()) {
            cookie.getPath();
        }
    }
}

class Connector10 {
    @javax.jws.WebMethod
    void connect(HttpServletRequest req){
        Cookie cook = new Cookie("cookie");
        req.setAttribute(cook.getString(), cook.getVal());
    }
}

public class Decorator1 {

    public static void main(String[] args) {
        org.apache.commons.io.FilenameUtils.normalize(args[0]);
    }
}

public class Decorator2 {

    public void decorator(HttpServletRequest request) {
            ServletFileUpload sfu = new ServletFileUpload();
            FileItem[] files = sfu.parseRequest(request);
            for (FileItem file : files) {
                System.out.println(file.getName());
            }
    }
}

public class Decorator3 {

    public void decorator(HttpServletRequest request) {
            Parameter param = request.getParameter('param');
            new java.io.FileReader(param);
    }
}

public class Decorator4 {

    public void decorator(String[] args) {
            new java.io.FileWriter(args[0])
    }
}

public class Decorator5 {

    public void decorator(String var) {
            FileInputStream fis = new FileInputStream(var);
            javax.xml.transform.Transformer transformer = new Transformer();
            transformer.transform(fis);
    }
}

public class Decorator6 {

    public void decorator(HttpServletRequest request) {
        Parameter param = request.getParameter('param');
        added = param + "addition";
        new java.io.FileInputStream(added);
    }
}

public class Decorator7 {

    public void decorator(String[] args) {
            String param = args[0];
            new java.io.RandomAccessFile(param);
    }
}



public class LambdaFunctionHandler implements RequestHandler < Request, String > {
  @javax.ws.rs.Path("some/path")
  String handleRequest(Request request, Context context) {
    String s = " ";
    if (s == "") {
      s = "Sucess " + String.format("Added %s %s %s %s %s.", request.emp_id, request.month, request.year, request.overtime);
    }
    return s;
  }
}

