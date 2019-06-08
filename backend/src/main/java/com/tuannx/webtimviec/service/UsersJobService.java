package com.tuannx.webtimviec.service;

import com.tuannx.webtimviec.model.Identity.UsersJobId;
import com.tuannx.webtimviec.model.Job;
import com.tuannx.webtimviec.model.Users;
import com.tuannx.webtimviec.model.UsersJob;
import com.tuannx.webtimviec.repository.JobRepository;
import com.tuannx.webtimviec.repository.UsersJobRepository;
import com.tuannx.webtimviec.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsersJobService {
    @Autowired
    UsersJobRepository usersJobRepository;

    @Autowired
    JobRepository jobRepository;

    @Autowired
    UsersRepository usersRepository ;

    public List<UsersJob> findAll() {
        return usersJobRepository.findAll();
    }

    public Optional<UsersJob> getUsersJob(UsersJobId usersJobId)
    {
        return usersJobRepository.findById(usersJobId);
    }

    public void saveUsersJob(UsersJob usersJob) {
        usersJobRepository.save(usersJob);
    }

    public void deleteUsersJob(UsersJobId usersJobId) {
        Optional<UsersJob> optionalUsersJob = getUsersJob(usersJobId);
        if(optionalUsersJob.isPresent()) {
            UsersJob usersJob = optionalUsersJob.get();
            usersJobRepository.delete(usersJob);
        }
        else
        {

        }
    }

    public List<UsersJob> findAllByJob(Integer jobId) {
        Optional<Job> optionalJob = jobRepository.findById(jobId);
        if(optionalJob.isPresent()) {
            return usersJobRepository.findAllByJob(optionalJob.get());
        }
        else return null;
    }

    public List<UsersJob> findAllByUser(Integer usersId) {
        Optional<Users> optionalUsers = usersRepository.findById(usersId);
        if(optionalUsers.isPresent()) {
            return usersJobRepository.findAllByUsers(optionalUsers.get());
        }
        else return null;
    }
}
