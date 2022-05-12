

export class Quiz
   
{ id!:string;
  title!:string;
  description!:string;
   creationdate!:Date;

 limitdate!:Date;
 nbquestions!:number;
 type!:string;
 final_score!:number;
 countdown!:number;
 evaluationmodel!:string;
 questionsList:questionsList[]=[];
 

}


export class questionsList{

question!:string;
points!:number;
correctanswer:string[]=[];
wronganswer:string[]=[];

}

