package com.example.micro_project_esd.DAO.DAOImplementation;

import com.example.micro_project_esd.Bean.Employee;
import com.example.micro_project_esd.Bean.Employee_Salary;
import com.example.micro_project_esd.DAO.EmployeeDAO;
import com.example.micro_project_esd.DAO.Employee_SalaryDAO;
import com.example.micro_project_esd.util.HibernateSessionUtil;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;

import javax.crypto.SealedObject;
import java.awt.*;
import java.util.List;

public class Employee_salaryDAOimpl implements Employee_SalaryDAO
{

    @Override
    public boolean AddSalary(Employee_Salary SalObj)
    {
        try(Session session= HibernateSessionUtil.getSession())
        {
            Transaction transaction= session.beginTransaction();
            session.save(SalObj);
            transaction.commit();
            return true;
        }
        catch (HeadlessException exception)
        {
            System.out.println("Hibernate Exception");
            System.out.print(exception.getLocalizedMessage());
            return true;
        }
    }

    @Override
    public boolean DisburseSalary(List<Employee_Salary> SalInfo)
    {
        try(Session session= HibernateSessionUtil.getSession())
        {
            Transaction transaction= session.beginTransaction();
            for (Object info : SalInfo)
            {
                session.save(info);
            }

            transaction.commit();
            return true;
        }
        catch (HeadlessException exception)
        {
            System.out.println("Hibernate Exception");
            System.out.print(exception.getLocalizedMessage());
            return false;
        }

    }
}
