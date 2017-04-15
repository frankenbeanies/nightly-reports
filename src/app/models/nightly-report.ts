import { Report } from './report';

export class NightlyReport {
    public Employee: string;
    public Store: string;
    public InToday: Report;
    public OutToday: Report;
    public InTomorrow: Report;
    public OutTomorrow: Report;
    public OnLot: Report;
    public OutOfService: Report;

    public constructor(){
        this.Employee = "";
        this.Store = "";
        this.InToday = new Report();
        this.OutToday = new Report();
        this.InTomorrow = new Report();
        this.OutTomorrow = new Report();
        this.OnLot = new Report();
        this.OutOfService = new Report();
    }

    public ToFormattedString(): string{
        return "In Today%0D%0A%0D%0A" + this.InToday.ToFormatedString()
            + "%0D%0A%0D%0A%0D%0AOut Today%0D%0A%0D%0A" + this.OutToday.ToFormatedString()
            + "%0D%0A%0D%0A%0D%0AIn Tomorrow%0D%0A%0D%0A" + this.InTomorrow.ToFormatedString()
            + "%0D%0A%0D%0A%0D%0AOut Tomorrow%0D%0A%0D%0A" + this.OutTomorrow.ToFormatedString()
            + "%0D%0A%0D%0A%0D%0AOut of Service%0D%0A%0D%0A" + this.OutOfService.ToFormatedString();
    }
}