import {Run} from './run';
import {Segment} from '../segment';

export class Marathon extends Run {

  constructor() {
    super(1, 'Marathon');
    this.segments.push(new Segment(42.2, 'km', 4));
  }
}
