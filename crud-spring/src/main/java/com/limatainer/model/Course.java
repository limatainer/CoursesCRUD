package com.limatainer.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
@Entity
// aqui eu colocaria a anotation @Table(name="cursos") no caso de minha entidade
// for diferente como eh igual e quem vai administrar tudo eh o hibernate entao
// deixa assim
public class Course {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO) // como esse id eh numerico posso usar uma anotacao que vai gerar
  // automaticamente um numero quando a info for inserida no registro
  @JsonProperty("_id")
  private Long id;

  @Column(length = 200, nullable = false)
  private String name;

  @Column(length = 10, nullable = false)
  private String category;
}
