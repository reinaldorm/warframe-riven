interface Riven {
  [weaponName: string]: {
    rerolled: RivenInfo;
    unrolled: RivenInfo;
  };
}

interface RivenInfo {
  itemType: string;
  compatibility: string;
  rerolled: boolean;
  avg: number;
  stddev: number;
  min: number;
  max: number;
  pop: number;
  median: number;
}
