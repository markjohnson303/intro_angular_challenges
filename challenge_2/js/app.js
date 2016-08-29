console.log('challenge #2 -- app.js loaded!');

var app = angular.module("appTwo", []);
app.controller("WelcomeController", WelcomeController);

function WelcomeController(){
  this.full_name = "Mark Johnson"; // change me
  this.age = 28;
  this.city = "Littleton";
  this.state = "CO";
  this.shout = function(str) {
  	return str + "!";
  };
}


app.controller("ClassController", ClassController);

function ClassController(){
  this.class_name = "White Walkers"; // change me
  this.enrolled_students = 14;
  this.start_date = "June";
  this.end_date = "September";
  this.shout = function(str) {
  	return str + "!";
  };
}