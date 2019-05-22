package com.tuannx.webtimviec.repository;

import com.tuannx.webtimviec.model.Identity.JobRequireSkillId;
import com.tuannx.webtimviec.model.JobRequireSkill;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobRequireSkillRepository extends JpaRepository<JobRequireSkill,JobRequireSkillId> {
}
