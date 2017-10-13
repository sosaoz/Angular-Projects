
//This Class gives today's Date and  the Date prior 21 days.
export class DateRelease {

  public date:Date = new Date();//Gets Today's Date
  public year:String;
  public month:String;
  public day:String;

  constructor (  ) {}

  todayDate():string{

    this.year = this.date.getFullYear().toString();

    let month = this.date.getMonth() + 1; // Adds 1 to make it 1-12 months
    let date =  this.date.getDate();


    if( date < 10 ){
      this.day = "0" + date.toString();//Adds "0" if Date is less than 10
    }

    else{
      this.day = date.toString();
    }

    if( month < 10 ){
      this.month = "0" + month.toString();// Adds "0" if Month is less than 10
    }

    else{
      this.month = month.toString();
    }

    return this.year + "-" + this.month +"-"+ this.day

  }

  lastDate():string{
     //Gets the Date prior 21 days
    let oldD = new Date( this.date.getFullYear(),
                         this.date.getMonth(),
                         this.date.getDate() -21 );// Subtracts 21 days from Today's Date

    this.year = oldD.getFullYear().toString();

    let month = oldD.getMonth() + 1; //Adds 1 to make it 1-12 months
    let date = oldD.getDate();

    if( date < 10 ){
      this.day = "0" + date.toString(); //Adds "0" if Date is less than 10
    }

    else{
      this.day = date.toString();
    }

    if( month < 10 ){
      this.month = "0" + month.toString(); // Adds "0" if Month is less than 10
    }

    else{
      this.month = month.toString();
    }

    return this.year + "-" + this.month +"-"+ this.day
  }
}
