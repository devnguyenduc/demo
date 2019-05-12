
export default class DateTime{
    constructor(date_time = new Date()){
        this.time = date_time;
        this.year = date_time.getFullYear();
        this.mon = date_time.getMonth() + 1;
        this.day = date_time.getDate();
        this.hour = date_time.getHours();
        this.min = date_time.getMinutes();
        this.digital = this.min + this.hour*100 + this.day*10000 + this.mon*1000000 + (this.year-2000)*100000000;
    }
    getYear(){
        return this.year;
    }
    getMonth(){
        return this.getMonth;
    }
    getDay(){
        return this.day;
    }
    getHour(){
        return this.hour;
    }
    getMinute(){
        return this.min;
    }
    digital(){
        return this.digital
    }
    getTime(){
        return this.time;
    }
}

