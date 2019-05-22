package com.tuannx.webtimviec.repository;

import com.tuannx.webtimviec.model.Identity.UsersJobId;
import com.tuannx.webtimviec.model.UsersJob;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersJobRepository extends JpaRepository<UsersJob,UsersJobId> {
}
