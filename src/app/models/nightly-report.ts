import { Report } from './report';

export class NightlyReport {
    public Employee: string;
    public Store: string;
    public InToday: Report;
    public OutToday: Report;
    public InTomorrow: Report;
    public OutTomorrow: Report;

    public constructor(){
        this.Employee = "";
        this.Store = "";
        this.InToday = new Report();
        this.OutToday = new Report();
        this.InTomorrow = new Report();
        this.OutTomorrow = new Report();
    }
}