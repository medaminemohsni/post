import { JobOffers } from "./JobOffers";

export class CandidateApp{
    idCandidateApp:any;
    applicationDate:Date;
    userId:any;
    idJob:string;
    tests:Array<string>;
    candidateState:AppState[];
    currentState:AppState;
    job:JobOffers;
  
    constructor(idCandidateApp:any,
        applicationDate:Date,
        userId:any,
        idJob:string,
        tests:Array<string>,
        candidateState:AppState[],currentState:AppState,job:JobOffers){

            this.idCandidateApp = idCandidateApp;
            this.applicationDate = applicationDate;
            this.userId = userId;
            this.idJob = idJob;
            this.tests = tests;
            this.candidateState =candidateState;
            this.currentState =currentState;
            this.job =job;

        }

}


export class AppState{
    idCandidateState:any;
    stateDate:Date;
    label:string;
    step:number;
    score:number;
    testState:boolean;


    constructor(idCandidateState:any,
        stateDate:Date,
        label:string,
        step:number,
        score:number,
        testState:boolean){
            this.idCandidateState = idCandidateState;
            this.stateDate = stateDate;
            this.label = label;
            this.step = step;
            this.score = score;
            this.testState = testState;
        }

}