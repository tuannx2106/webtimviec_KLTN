package com.tuannx.webtimviec.service;

import com.tuannx.webtimviec.model.Skill;
import com.tuannx.webtimviec.repository.SkillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SkillService {

    @Autowired
    SkillRepository skillRepository;

    public List<Skill> findAll() {
        return skillRepository.findAll();
    }

    public Optional<Skill> getSkill(Integer skillId)
    {
        return skillRepository.findById(skillId);
    }

    public void saveSkill(Skill skill) {
        skillRepository.save(skill);
    }

    public void deleteSkill(Integer skillId) {
        Optional<Skill> optionalSkill = getSkill(skillId);
        if(optionalSkill.isPresent()) {
            Skill skill = optionalSkill.get();
            skillRepository.delete(skill);
        }
        else
        {

        }
    }
}
