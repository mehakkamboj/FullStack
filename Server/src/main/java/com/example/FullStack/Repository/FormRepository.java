package com.example.FullStack.Repository;

import com.example.FullStack.Model.User;
import org.springframework.data.repository.CrudRepository;

public interface FormRepository extends CrudRepository<User,String> {
}
