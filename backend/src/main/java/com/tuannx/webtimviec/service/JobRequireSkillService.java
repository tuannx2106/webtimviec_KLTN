package com.tuannx.webtimviec.service;

import com.tuannx.webtimviec.model.Identity.JobRequireSkillId;
import com.tuannx.webtimviec.model.JobRequireSkill;
import com.tuannx.webtimviec.repository.JobRequireSkillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JobRequireSkillService {

    @Autowired
    JobRequireSkillRepository jobRequireSkillRepository;

    public List<JobRequireSkill> findAll() {
        return jobRequireSkillRepository.findAll();
    }

    public Optional<JobRequireSkill> getJobRequireSkill(JobRequireSkillId jobRequireSkillId)
    {
        return jobRequireSkillRepository.findById(jobRequireSkillId);
    }

    public void saveJobRequireSkill(JobRequireSkill jobRequireSkill) {
        jobRequireSkillRepository.save(jobRequireSkill);
    }

    public void deleteJobRequireSkill(JobRequireSkillId jobRequireSkillId) {
        Optional<JobRequireSkill> optionalJobRequireSkill = getJobRequireSkill(jobRequireSkillId);
        if(optionalJobRequireSkill.isPresent()) {
            JobRequireSkill jobRequireSkill = optionalJobRequireSkill.get();
            jobRequireSkillRepository.delete(jobRequireSkill);
        }
        else
        {

        }
    }
}
