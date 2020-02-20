import {AnimalEnum} from "./AnimalEnum";

const FROG_SOUNDS: string = "BRR" || "ALAL";

export const ANIMAL_BY_SOUND: Map<string,string> = new Map()
    .set(FROG_SOUNDS, AnimalEnum.FROG);
