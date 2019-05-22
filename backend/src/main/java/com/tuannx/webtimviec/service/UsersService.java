package com.tuannx.webtimviec.service;

import com.tuannx.webtimviec.model.Users;
import com.tuannx.webtimviec.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsersService {

    @Autowired
    UsersRepository usersRepository;

    public Optional<Users> loginUser(String email, String password) {
        return usersRepository.findUsersByEmailAndPassword(email,password);
    }

    public Boolean isEmailExist(String email){
        Optional<Users> user = usersRepository.findUsersByEmail(email);
        if(!user.isPresent()) {
            return true;
        }
        return false;
    }

    public List<Users> findAll() {
        return usersRepository.findAll();
    }

    public Optional<Users> getUsers(Integer usersId)
    {
        return usersRepository.findById(usersId);
    }

    public void saveUsers(Users users) {
        usersRepository.save(users);
    }

    public void deleteUsers(Integer usersId) {
        Optional<Users> optionalUsers = getUsers(usersId);
        if(optionalUsers.isPresent()) {
            Users users = optionalUsers.get();
            usersRepository.delete(users);
        }
        else
        {

        }
    }
}
