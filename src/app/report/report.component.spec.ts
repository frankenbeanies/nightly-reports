import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { NightlyReportComponent } from '../nightly-report/nightly-report.component';
import { ReportComponent } from './report.component';

describe('ReportComponent', () => {
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

    it('should create the report', async(() => {
        const fixture = TestBed.createComponent(ReportComponent);
        const report = fixture.debugElement.componentInstance;
        expect(report).toBeTruthy();
    }));
})