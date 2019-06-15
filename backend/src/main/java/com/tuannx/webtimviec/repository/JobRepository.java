package com.tuannx.webtimviec.repository;

import com.tuannx.webtimviec.model.Job;
import com.tuannx.webtimviec.model.Recruiter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface JobRepository extends JpaRepository<Job, Integer> {

    List<Job> findAllByRecruiter(Recruiter recruiter);
}
