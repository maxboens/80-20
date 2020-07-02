import {Component} from '@angular/core';
import {crint, ff, foun, getRuns, hill, lgint, long, longff, longsp, mxint, rec, shint, sp, temp} from '../run-types/run-factory';
import {Marathon} from '../run-types/marathon';

@Component({
  selector: 'app-all-runs',
  templateUrl: './all-runs.component.html'
})
export class AllRunsComponent {

  allRuns = [
    getRuns(9, rec), getRuns(9, foun), getRuns(15, long),
    getRuns(10, ff), getRuns(12, hill), getRuns(10, temp),
    getRuns(8, shint), getRuns(10, lgint), getRuns(6, longsp),
    getRuns(6, longff), getRuns(4, mxint), getRuns(5, crint),
    getRuns(14, sp), new Marathon()
  ];
}
