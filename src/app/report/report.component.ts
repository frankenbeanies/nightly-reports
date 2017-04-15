import { Component } from '@angular/core';

import { Report } from '../models/report';

@Component({
    selector: 'report',
    templateUrl: './report.component.html',
    styles: ['./report.component.css']
})
export class ReportComponent {
    public report: Report = new Report();
}