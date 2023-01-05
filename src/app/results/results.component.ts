import { Component , Input } from '@angular/core';
import { FormComponent } from '../form/form.component';
import questions from "../../assets/json/questions.json"
import { PassingService } from '../passing.service';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
 
  
  result1 =  FormComponent.answerString
  
  test = FormComponent.input
  userAnswer :any;
 // @Input() receivedValue: String | undefined;
  // parent
constructor(public service: PassingService){
  this.userAnswer = this.service.answers


}

Q1 : any = [(questions.Q1[0]),(questions.Q1[1]),(questions.Q1[2]),(questions.Q1[3]),(questions.Q1[4])];
Q2 : any = [(questions.Q2[0]),(questions.Q2[1]),(questions.Q2[2]),(questions.Q2[3]),(questions.Q2[4])];
Q3 : any = [(questions.Q3[0]),(questions.Q3[1]),(questions.Q3[2]),(questions.Q3[3]),(questions.Q3[4])];
Q4 : any = [(questions.Q4[0]),(questions.Q4[1]),(questions.Q4[2]),(questions.Q4[3]),(questions.Q4[4])];
Q5 : any = [(questions.Q5[0]),(questions.Q5[1]),(questions.Q5[2]),(questions.Q5[3]),(questions.Q5[4])];
Q6 : any = [(questions.Q6[0]),(questions.Q6[1])];
Q7 : any = [(questions.Q7[0]),(questions.Q7[1]),(questions.Q7[2])];
Q8 : any = [(questions.Q8[0]),(questions.Q8[1]),(questions.Q8[2])];
Q9 : any = [(questions.Q9[0]),(questions.Q9[1])];


}


