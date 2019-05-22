package com.tuannx.webtimviec.repository;

import com.tuannx.webtimviec.model.Identity.UsersSkillId;
import com.tuannx.webtimviec.model.UsersSkill;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersSkillRepository extends JpaRepository<UsersSkill, UsersSkillId> {
}
