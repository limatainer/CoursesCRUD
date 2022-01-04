package com.limatainer.controller;

import java.util.List;

import com.limatainer.model.Course;
import com.limatainer.repository.CourseRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/courses")
@AllArgsConstructor
public class CourseController {

  // eu poderia usar @Autowired mas hoje em dia nao se usa mais e sim o controller
  // por questao de boas praticas
  private final CourseRepository courseRepository;

  // se nao fosse pela anottaion all args do lombok eu teria de fazer na mao assim
  // public CourseController(CourseRepository courseRepository) {
  // this.courseRepository = courseRepository;
  // }

  @GetMapping
  public List<Course> list() {
    return courseRepository.findAll();
  }

}
