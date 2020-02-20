import {Container} from "inversify";
import {IMusicalLakeService} from "../repository/IMusicalLakeService";
import {MusicalLakeService} from "../services/MusicalLakeService";
import IDENTIFIERS from "../constant/Identifiers";
import {IAnimal} from "../repository/IAnimal";
import {Animal} from "../services/Animal";

const CONTAINER: Container = new Container();

CONTAINER.bind<IMusicalLakeService>(IDENTIFIERS.IMusicalLakeService).to(MusicalLakeService);
CONTAINER.bind<IAnimal>(IDENTIFIERS.IAnimal).to(Animal);

export default CONTAINER;
