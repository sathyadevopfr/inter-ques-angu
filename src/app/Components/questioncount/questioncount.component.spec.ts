import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestioncountComponent } from './questioncount.component';

describe('QuestioncountComponent', () => {
  let component: QuestioncountComponent;
  let fixture: ComponentFixture<QuestioncountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestioncountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestioncountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
