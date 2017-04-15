import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { NightlyReportComponent } from './nightly-report.component';
import { ReportComponent } from '../report/report.component';

describe('NightlyReportComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                NightlyReportComponent,
                ReportComponent
            ],
            imports: [
                FormsModule
            ]
        });
        TestBed.compileComponents();
    });

    it('should create the nightly report', async(() => {
        const fixture = TestBed.createComponent(NightlyReportComponent);
        const report = fixture.debugElement.componentInstance;
        expect(report).toBeTruthy();
    }));
})