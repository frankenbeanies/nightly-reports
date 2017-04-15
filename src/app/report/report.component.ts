import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Report } from '../models/report';

@Component({
    selector: 'report',
    templateUrl: './report.component.html',
    styles: ['./report.component.css']
})
export class ReportComponent {
    @Input("title") title: string = "";
    @Input("report") report: Report = new Report();
    @Output("reportEmitter") ReportEmitter: EventEmitter<Report> = new EventEmitter<Report>();

    public Change(): void {
        this.ReportEmitter.emit(this.report);
    }
}