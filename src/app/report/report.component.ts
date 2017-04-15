import { Component } from '@angular/core';

import { NightlyReport } from '../models/nightly-report';
import { Report } from '../models/report';

@Component({
    selector: 'report',
    templateUrl: './report.component.html',
    styles: ['./report.component.css']
})
export class ReportComponent {
    public nightlyReport: NightlyReport = new NightlyReport();

    public SaveReport(): void{
    }
}