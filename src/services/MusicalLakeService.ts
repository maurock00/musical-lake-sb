import {IMusicalLakeService} from "../repository/IMusicalLakeService";
import {inject, injectable} from "inversify";
import {Animal} from "./Animal";
import IDENTIFIERS from "../constant/Identifiers";
import {IAnimal} from "../repository/IAnimal";

@injectable()
export class MusicalLakeService implements IMusicalLakeService{

    private _animal: Animal;

    constructor(
        @inject(IDENTIFIERS.IAnimal) animal: IAnimal
    ){
        this._animal = animal;
    }

    findAll(): string | undefined {
        return this._animal.getAnimalBySound("ALAL");
    }
}
