export interface Pose {
  id?: string;
  name?: string;
  abbr?: string;
  sanskritName?: string;
  description?: string;
  type?: string[];
  ashtangaSeries?: 1 | 2 | 3 | 4 | 5 | 6;
}

/**
 * For each object, the key is what is displayed in the UI
 * and the value relates to what is stored in persistence.
 */
export const PoseTypesUI = [
  { Standing: 'standing' },
  { 'Arm Balance': 'armBalance' },
  { Inversion: 'inversion' },
  { Backbend: 'backbend' },
  { 'Forward Fold': 'forwardFold' },
  { Seated: 'seated' },
  { Restorative: 'restorative' },
  { Twist: 'twist' },
  { Balancing: 'balancing' },
  { 'Chest Opener': 'chestOpener' },
  { Binding: 'binding' },
  { Kneeling: 'kneeling' }
];

export class PoseBase implements Pose {
  id: string;
  name: string;
  abbr: string;
  sanskritName: string;
  description: string;
  ashtangaSeries: any;

  constructor(pose: Pose) {
    this.id = pose.id || '';
    this.name = pose.name || '';
    this.abbr = pose.abbr || '';
    this.sanskritName = pose.sanskritName || '';
    this.description = pose.description || '';
  }
}

export interface Sequence {
  id?: string;
  name?: string;
  peakPose?: Array<Pose>
  description?: string;
  steps?: SequenceStep[];
}
export interface SequenceStep {
  breaths?: number;
  pose?: Pose;
}

export interface Class {
  id?: string;
  name?: string;
  description?: string;
  sequences: Sequence[];
}

export interface User {
  name: string;
  userId?: string;
  photoUrl?: string;
}
