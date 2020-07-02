import {Run} from './run';
import {Segment} from '../segment';

export class LongRun extends Run {

  constructor(index: number) {
    super(index, 'Long Run');
    this.segments.push(new Segment(1, 'Kilometers', 1));
    this.segments.push(new Segment(3.5 + Math.round(index * 1.7), 'Kilometers', 2));
    this.segments.push(new Segment(1, 'Kilometers', 1));
  }

}
