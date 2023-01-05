import { Component , Input } from '@angular/core';
import { Form } from '@angular/forms';
import {FormControl, FormGroup} from "@angular/forms";
import { Router } from '@angular/router';
import questions from "../../assets/json/questions.json"
import { PassingService } from '../passing.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  //Q1  = [questions.Q1(0),questions.Q1(1)];
 // Q1 : any = [questions.Q1(0), questions.Q1(1)]

 //Q1 : any = ["Q1", "answer 1"];

// Q1 = JSON.stringify(questions.Q1);
form = new FormGroup({
  q1: new FormControl(''),
  q2: new FormControl(''),
  q3: new FormControl(''),
  q4: new FormControl(''),
  q5: new FormControl(''),
  q6: new FormControl(''),
  q7: new FormControl(''),
  q8: new FormControl(''),
  q9: new FormControl(''),

})
TFAnswer : boolean = false;
MTAnswer : String  = "A";
answerString !: String;

Q1 : any = [(questions.Q1[0]),(questions.Q1[1]),(questions.Q1[2]),(questions.Q1[3]),(questions.Q1[4])];
Q2 : any = [(questions.Q2[0]),(questions.Q2[1]),(questions.Q2[2]),(questions.Q2[3]),(questions.Q2[4])];
Q3 : any = [(questions.Q3[0]),(questions.Q3[1]),(questions.Q3[2]),(questions.Q3[3]),(questions.Q3[4])];
Q4 : any = [(questions.Q4[0]),(questions.Q4[1]),(questions.Q4[2]),(questions.Q4[3]),(questions.Q4[4])];
Q5 : any = [(questions.Q5[0]),(questions.Q5[1]),(questions.Q5[2]),(questions.Q5[3]),(questions.Q5[4])];
Q6 : any = [(questions.Q6[0]),(questions.Q6[1])];
Q7 : any = [(questions.Q7[0]),(questions.Q7[1]),(questions.Q7[2])];
Q8 : any = [(questions.Q8[0]),(questions.Q8[1]),(questions.Q8[2])];
Q9 : any = [(questions.Q9[0]),(questions.Q9[1])];


  static answerString: any;
  static input: any;

  //question !: Form;
  constructor(private router: Router, public service: PassingService){ 

  }
   
  

  //this.profile = {
    //   name : this.name,
    //   designation : this.designation,
    //   skills : "HTML, CSS, Bootstrap, JavaScript",
    //   location : "Kuwait",
    //   contact : [

// check : boolean =false;
// if(document: any.getElementById: any('Q1B')!=null){
// temp : String = document.getElementById('Q1B');}

// if(document.getElementById('Q1B').checked == true) {   
//   document.write("Summer radio button is selected");   
// } else {  
//   document.write("Summer radio button is not selected");   

// }  
//child

display(){
 let input = document.getElementById('Q1A') as HTMLInputElement | null;}

input : String= "blah blah"

log(input: any) { console.log(input) }

// test(answer : String){
//   this.answerString = answer;
// }

// Q1A(){
//   this.grade[0]=document.getElementById('Q1A') as HTMLInputElement;
// }


onSubmit() {
  console.log(this.form.value);
  this.service.answers = this.form.value;

  this.router.navigateByUrl('/results')

}
}
