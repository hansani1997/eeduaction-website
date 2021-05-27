import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  course=[
    { 'id': 1, 'name': 'Learn Angular', 'description':'Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript','image':'../../assets/angular.png'},
    { 'id': 2, 'name': 'Learn TypeScript', 'description': 'TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to it', 'image': '../../assets/typescript.png'},
    { 'id': 3, 'name': 'Learn NodeJs', 'description': 'As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications Node. js is primarily used for non-blocking.', 'image': '../../assets/nodejs.jpg' },
    { 'id': 4, 'name': 'Learn Reactjs', 'description': 'ReactJS is JavaScript library used for building reusable UI components. According to React official documentation, following is the definition ', 'image': '../../assets/reactjs.png' },
  ]
}
