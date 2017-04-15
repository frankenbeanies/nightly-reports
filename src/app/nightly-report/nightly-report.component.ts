import { Component } from '@angular/core';

import { NightlyReport } from '../models/nightly-report';

@Component({
    selector: 'nightly-report',
    templateUrl: './nightly-report.component.html'
})
export class NightlyReportComponent{
    public nightlyReport: NightlyReport = new NightlyReport();

    public SendReport(): void{
        let date = new Date();
        let subject: string = "Nightly Report | " + 
            this.nightlyReport.Store + " | " + 
            date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
        let body: string = this.nightlyReport.ToFormattedString();
        document.location.href="mailto:me@samuelbostick.com?subject=" + subject + "&body=" + body;
    }
}