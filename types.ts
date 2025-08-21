
export interface PlayerProgress {
  xp: number;
  gems: number;
  unlockedWorlds: number[];
  unlockedStages: { [worldId: number]: number[] };
  completedZones: { [stageId: number]: { [zoneId: number]: boolean } };
}

export enum ChallengeType {
  MultipleChoice,
  Rephrase,
  Matching,
  Sorting,
  Correction
}

export interface Choice {
  text: string;
  isCorrect: boolean;
}

export interface Zone {
  id: number;
  title: string;
  description: string;
  learning: string;
  challenge: {
    type: ChallengeType;
    question: string;
    instructions?: string;
    choices?: Choice[];
    correctAnswer?: string | string[];
    initialText?: string;
  };
}

export interface Stage {
  id: number;
  title: string;
  icon: React.ReactNode;
  zones: Zone[];
}

export interface World {
  id: number;
  title: string;
  description: string;
  color: string;
  icon: React.ReactNode;
  stages: Stage[];
}
