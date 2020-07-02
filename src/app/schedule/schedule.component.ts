import {Component} from '@angular/core';
import {crint, ff, foun, hill, lgint, long, longff, longsp, mxint, rec, shint, sp, temp} from '../run-types/run-factory';
import {Run} from '../run-types/run';
import {Marathon} from '../run-types/marathon';
import {SimMarathon} from '../run-types/sim-marathon';
var test='test'
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html'
})
export class ScheduleComponent {

  currentWeek: number;
  weeksMap = new Map<number, Array<Run>>();
  weekNumbers: Array<number>;
  weeklyVolume = '15'
  constructor() {
    this.weeksMap.set(1, [ff(2), foun(3), foun(3), sp(1), foun(3), long(1)]);
    this.weeksMap.set(2, [ff(3), foun(4), foun(3), sp(2), foun(3), long(2)]);
    this.weeksMap.set(3, [ff(2), foun(3), foun(3), sp(1), foun(3), long(1)]);
    this.weeksMap.set(4, [ff(4), foun(4), foun(3), hill(1), rec(4), long(3)]);
    this.weeksMap.set(5, [ff(6), foun(4), foun(4), hill(2), rec(4), long(4)]);
    this.weeksMap.set(6, [ff(4), foun(3), foun(4), hill(1), rec(3), long(2)]);
    this.weeksMap.set(7, [ff(7), foun(5), foun(4), hill(4), rec(4), long(5)]);
    this.weeksMap.set(8, [ff(8), foun(5), foun(5), hill(6), rec(4), long(7)]);
    this.weeksMap.set(9, [ff(6), foun(4), foun(4), hill(4), rec(4), long(4)]);
    this.weeksMap.set(10, [temp(2), rec(5), foun(5), shint(1), rec(4), long(9)]);
    this.weeksMap.set(11, [crint(1), rec(5), foun(5), shint(2), rec(5), long(11)]);
    this.weeksMap.set(12, [temp(2), rec(4), foun(5), shint(3), rec(4), longsp(3)]);
    this.weeksMap.set(13, [temp(2), rec(5), foun(5), lgint(1), rec(5), longff(1)]);
    this.weeksMap.set(14, [temp(3), rec(5), foun(6), mxint(1), rec(5), longff(1)]);
    this.weeksMap.set(15, [temp(2), rec(5), foun(5), lgint(1), rec(1), new SimMarathon()]);
	  this.weeksMap.set(16, [crint(2), rec(6), foun(6), mxint(1), rec(6), longff(5)]);
	  this.weeksMap.set(17, [temp(4), rec(5), foun(5), mxint(1), rec(4), longsp(2)]);
	  this.weeksMap.set(18, [ff(3), foun(4), foun(3), sp(1), rec(5), new Marathon()]);
    this.weekNumbers = Array.from(this.weeksMap.keys());
    this.currentWeek = +localStorage.getItem('currentWeek') || 4;
  }

  getRunForDay(index: number): Array<Run> {
    return [this.weeksMap.get(this.currentWeek)[index]];
  }

  setWeek() {
    localStorage.setItem('currentWeek', '' + this.currentWeek);
  }

}
