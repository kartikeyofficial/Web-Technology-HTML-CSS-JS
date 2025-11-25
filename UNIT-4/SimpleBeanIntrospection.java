import java.beans.*;

public class SimpleBeanIntrospection {
    public static void main(String[] args) throws IntrospectionException {
        BeanInfo beanInfo= Introspector.getBeanInfo(StudentBean.class);
        for(PropertyDescriptor propery: beanInfo.getPropertyDescriptors()){
             System.out.println("Property: "+propery.getName());
        }
        for(MethodDescriptor method: beanInfo.getMethodDescriptors() ){
            System.out.println("Method: "+method.getName());
        }
        for(EventSetDescriptor event : beanInfo.getEventSetDescriptors()){
            System.out.println("Events: "+event.getName());
        }

        
    }
    
}
