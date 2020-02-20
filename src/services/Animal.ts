import {ANIMAL_BY_SOUND} from "../infrastructure/Maps";
import {injectable} from "inversify";
import {IAnimal} from "../repository/IAnimal";

@injectable()
export class Animal implements IAnimal{
    public getAnimalBySound(sound: string): string | undefined {
        return ANIMAL_BY_SOUND.get(sound.toUpperCase());
    }
}
