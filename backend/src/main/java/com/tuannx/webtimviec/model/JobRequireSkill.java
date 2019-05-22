package com.tuannx.webtimviec.model;

import com.tuannx.webtimviec.model.Identity.JobRequireSkillId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "job_require_skill")
public class JobRequireSkill {
    @EmbeddedId
    private JobRequireSkillId jobRequireSkillIdentity;

    @MapsId("jobId")
    @ManyToOne
    @JoinColumn(name = "job_id")
    private Job job;

    @MapsId("skillId")
    @ManyToOne
    @JoinColumn(name = "skill_id")
    private Skill skill;

}
