
export class JobOffers {
        idJob:any;
	    title:string;
            description:string;
	    creationDate:Date;
	    startDate:Date;
            deadlineDate:Date;
	    state:string;
	    jobType:string;
	    location:string;
	    locationType:string;
	    requirement:Array<String>;
	    hireNumber:number;
	    salary:number;
	    userId:string;

        constructor(
            idJob:any,
            title:string,
            description:string,
            creationDate:Date,
            deadlineDate:Date,
            startDate:Date,
            state:string,
            jobType:string,            
            location:string,
            locationType:string,
            requirement:Array<String>,
            hireNumber:number,
            salary:number,
            userId:string )
            {
                this.idJob=idJob;
                this.title = title;
                this.description = description;
                this.creationDate = creationDate;
                this.deadlineDate = deadlineDate;
                this.startDate = startDate;
                this.state = state;
                this.jobType = jobType;
                this.location = location;
                this.locationType = locationType;
                this.requirement = requirement;
                this.hireNumber = hireNumber;
                this.salary = salary;
                this.userId = userId;

        }
      

}


