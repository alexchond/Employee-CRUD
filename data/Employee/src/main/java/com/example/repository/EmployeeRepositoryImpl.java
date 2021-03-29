package com.example.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import javax.persistence.Query;
import com.example.model.Employee;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional(readOnly = true)
public class EmployeeRepositoryImpl implements EmployeeRepositoryCustom {

    @PersistenceContext
    EntityManager entityManager;

    @Override
    public List<Employee> findByName(String name) {
        Query query = entityManager.createNativeQuery("SELECT * FROM db_example.employee as em " +
                "WHERE (em.first_name LIKE ? OR em.last_name LIKE ?)", Employee.class);
        query.setParameter(1, "%" + name + "%");
        query.setParameter(2, "%" + name + "%");

        return query.getResultList();
    }
}