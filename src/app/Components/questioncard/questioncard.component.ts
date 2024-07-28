import { Component, Input } from '@angular/core';
import { Question } from '../../modal';

@Component({
  selector: 'app-questioncard',
  standalone: true,
  imports: [],
  templateUrl: './questioncard.component.html',
  styleUrl: './questioncard.component.css'
})
export class QuestioncardComponent {
@Input() question!:Question 
}
