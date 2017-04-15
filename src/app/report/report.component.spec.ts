import { TestBed, async, fakeAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { NightlyReportComponent } from '../nightly-report/nightly-report.component';
import { ReportComponent } from './report.component';

import { Report } from '../models/report';

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

    it('should emit a report when change() is called', fakeAsync(() => {
        const fixture = TestBed.createComponent(ReportComponent);
        const component = fixture.debugElement.componentInstance;

        component.ReportEmitter.subscribe(r => {
            expect(r).toEqual(new Report());
        });

        component.Change();
    }));
})