package com.tuannx.webtimviec.service;


import com.tuannx.webtimviec.model.Job;
import com.tuannx.webtimviec.model.JobRequireProfessionJob;
import com.tuannx.webtimviec.model.ProfessionJob;
import com.tuannx.webtimviec.repository.JobRepository;
import com.tuannx.webtimviec.repository.JobRequireProfessionJobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JobService {

    @Autowired
    JobRepository jobRepository;

    @Autowired
    JobRequireProfessionJobRepository jobRequireProfessionJobRepository;

    public List<JobRequireProfessionJob> findAllByProfessionJob(ProfessionJob professionJob) {
        return jobRequireProfessionJobRepository.findAllByProfessionJob(professionJob);
    }

    ////////////////// Admin
    public List<Job> findAll() {
        return jobRepository.findAll();
    }

    public Optional<Job> getJob(Integer jobId)
    {
        return jobRepository.findById(jobId);
    }

    public void saveJob(Job job) {
        jobRepository.save(job);
    }

    public void deleteJob(Integer jobId) {
        Optional<Job> optionalJob = getJob(jobId);
        if(optionalJob.isPresent()) {
            Job job = optionalJob.get();
            jobRepository.delete(job);
        }
        else
        {

        }
    }
}
