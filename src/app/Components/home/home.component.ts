
import { Component,OnInit, inject} from '@angular/core';
import { ServiceService } from '../../Service/service.service';
import { APIResponse, Language, LanguageById,Question } from '../../modal';
import { Observable,map } from 'rxjs';
import {FormsModule} from '@angular/forms'
import { QuestioncardComponent } from '../questioncard/questioncard.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,QuestioncardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
 
  httpService = inject(ServiceService);
  langugaeList: Language[] = []; 
  topicList: LanguageById[] = [];
  selectedLanguage: number = 0;
  selectedTopic: number = 0;

  questionList:Question[]=[]

  ngOnInit(): void {
    this.loadLanguages();
    
  }
  loadLanguages() {
    this.httpService.getAllLanguages().subscribe((res: APIResponse) => {
      this.langugaeList = res.data;
    });
  }
  onLanguageChange(event: any) {
    this.questionList = [];
    this.getQuestionByLanguage(event);
 this.httpService.getLanguageTopicById(event
    ).pipe(map((langId:APIResponse) => {
        this.topicList = langId.data
    }))
  }
  onTopicChange() {
    this.httpService.getQuestionByTopicId(this.selectedTopic)
      .subscribe((result:APIResponse) => {
        this.questionList = result.data;
    })
  }
  getQuestionByLanguage(id:number) {
    this.httpService.getAllQuestionsByLanguageId(id).subscribe((res:APIResponse) => {
      this.questionList = res.data;
    })
  }
}
