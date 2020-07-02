import {Run} from './run';
import {Segment} from '../segment';

export class SimMarathon extends Run {

  constructor() {
    super(1, 'Simulation Marathon');
    this.segments.push(new Segment(26.2, 'km', 4));
  }
}