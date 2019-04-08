import { Component, OnInit } from '@angular/core';
import { Developer } from '../common/developer.model'
import { Skill } from '../common/skill.model'


@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {
public developer : Developer

  constructor() {}

  ngOnInit() {
    this.developer = new Developer('Jérémy','Guérin-Coquereau',31,'Homme','Ceci est une bio',[
      new Skill ('Name','Logo','Site'),
      new Skill ('JS', 'Javascript', 'Angular'),
      new Skill ('CSS', 'HTML', 'Node.js'),
    ]);
  }
}
