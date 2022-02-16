import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastUpdate'
})
export class LastUpdatePipe implements PipeTransform {

  transform(created_at: any): number {
    let today = new Date();
    let todayWithoutTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    var dateDifference = Math.abs(todayWithoutTime - created_at) //returns value in miliseconds
    const secondsInDay = 86400; //60 seconds * 60 minutes in an hour * 24 hours in a day
    var dateDifferenceSeconds = dateDifference*0.001; //converts miliseconds to seconds
    var lastUpdate = dateDifferenceSeconds/secondsInDay;

    if (lastUpdate >= 1 && created_at > todayWithoutTime){
      return 0;
    }else{
      return lastUpdate;
    }


  }

}
