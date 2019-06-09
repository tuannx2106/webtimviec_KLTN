package com.tuannx.webtimviec.repository;

import com.tuannx.webtimviec.model.Identity.UsersJobId;
import com.tuannx.webtimviec.model.Job;
import com.tuannx.webtimviec.model.Users;
import com.tuannx.webtimviec.model.UsersJob;
import org.apache.catalina.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UsersJobRepository extends JpaRepository<UsersJob,UsersJobId> {

    List<UsersJob> findAllByJob(Job job);

    List<UsersJob> findAllByUsers(Users users);
}
