export interface Language{
    languageId: number,
    languageName: string,
    logo:string
}

export interface APIResponse{
    message: string,
    result: boolean,
    data:any
}

export interface LanguageById {
  topicName: string,
    languageId: number,
    languageTopicId: number,
    orderNo:number
}
export interface Question {
  question: string;
  answer: string;
  topicName: string;
  languageTopicId: number;
  quesId: number;
  language: string;
  orderNo: number;
    languageId: number,
    logo:string
}