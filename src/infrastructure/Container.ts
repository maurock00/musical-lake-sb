import {Container} from "inversify";
import {IMusicalLakeService} from "../repository/IMusicalLakeService";
import {MusicalLakeService} from "../services/MusicalLakeService";
import IDENTIFIERS from "../constant/Identifiers";

const CONTAINER: Container = new Container();

CONTAINER.bind<IMusicalLakeService>(IDENTIFIERS.IMusicalLakeService).to(MusicalLakeService);

export default CONTAINER;
