package ca.mcgill.ecse321.cooperator.dao;

import org.springframework.data.repository.CrudRepository;

import ca.mcgill.ecse321.cooperator.model.Administrator;

public interface AdministratorRepository extends CrudRepository<Administrator, String>{

	Administrator findAdministratorByUserId(int id);
}
