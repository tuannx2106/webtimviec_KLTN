package com.tuannx.webtimviec.repository;

import com.tuannx.webtimviec.model.Identity.JobRequireProfessionJobId;
import com.tuannx.webtimviec.model.JobRequireProfessionJob;
import com.tuannx.webtimviec.model.ProfessionJob;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface JobRequireProfessionJobRepository extends JpaRepository<JobRequireProfessionJob,JobRequireProfessionJobId> {

    List<JobRequireProfessionJob> findAllByProfessionJob(ProfessionJob professionJob);
}
