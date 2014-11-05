package net.carky.config;

import org.hibernate.SessionFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.orm.hibernate4.HibernateTransactionManager;
import org.springframework.orm.hibernate4.LocalSessionFactoryBean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;
import java.io.IOException;

@Configuration
@EnableTransactionManagement
public class RootConfig {

    @Bean
    public DataSource dataSource() throws NamingException {
        Context context = new InitialContext();
        DataSource ds = (DataSource) context.lookup("java:/comp/env/jdbc/CarkyDB");
        return ds;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SessionFactory sessionFactory() throws NamingException, IOException {
        LocalSessionFactoryBean lsfb = new LocalSessionFactoryBean();
        lsfb.setDataSource(dataSource());
        lsfb.setPackagesToScan(new String[] {"net.carky.model"});
        lsfb.afterPropertiesSet();
        return lsfb.getObject();
    }

    @Bean
    public HibernateTransactionManager transactionManager() throws NamingException, IOException {
        HibernateTransactionManager htm = new HibernateTransactionManager(sessionFactory());
        return htm;
    }

}
