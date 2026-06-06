package com.example.ems.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.ems.entity.Employee;
import com.example.ems.repository.EmployeeRepository;

@Service
public class EmployeeServiceImpl
        implements EmployeeService {

    private final EmployeeRepository repository;

    public EmployeeServiceImpl(
            EmployeeRepository repository) {
        this.repository = repository;
    }

    @Override
    public Employee addEmployee(
            Employee employee) {

        return repository.save(employee);
    }

    @Override
    public List<Employee> getAllEmployees() {
        return repository.findAll();
    }

    @Override
    public Employee getEmployeeById(Long id) {
        return repository.findById(id)
                .orElseThrow();
    }

    @Override
    public Employee updateEmployee(
            Long id,
            Employee employee) {

        Employee existing =
                repository.findById(id)
                        .orElseThrow();

        existing.setFirstName(
                employee.getFirstName());

        existing.setLastName(
                employee.getLastName());

        existing.setEmail(
                employee.getEmail());

        existing.setDepartment(
                employee.getDepartment());

        existing.setSalary(
                employee.getSalary());

        existing.setPhone(
                employee.getPhone());

        return repository.save(existing);
    }

    @Override
    public void deleteEmployee(Long id) {
        repository.deleteById(id);
    }
}