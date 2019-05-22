package com.tuannx.webtimviec.model;

import com.tuannx.webtimviec.model.Identity.UsersSkillId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity(name="users_skill")
public class UsersSkill implements Serializable {

    @EmbeddedId
    UsersSkillId userSkillId;

    @MapsId("usersId")
    @ManyToOne
    @JoinColumn(name = "users_id")
    private Users users;

    @MapsId("skillId")
    @ManyToOne
    @JoinColumn(name = "skill_id")
    private Skill skill;

    @Column(name="level")
    private Integer level;

    @Column(name="experience")
    private Integer experience;

}
