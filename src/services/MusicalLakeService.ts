import "reflect-metadata";
import {IMusicalLakeService} from "../repository/IMusicalLakeService";
import {injectable} from "inversify";
import SONGS from "../constant/Songs";
import {SoundEnum} from "../infrastructure/SoundsEnum";

@injectable()
export class MusicalLakeService implements IMusicalLakeService{
    getRemainingSounds(sound: string): string{
        const songs: string[][] = SONGS;
        const searchedSong: string[] = songs.filter((x: string[]) => x.includes(sound))[0];

        if(searchedSong && sound !== SoundEnum.BRRAH){
            const indexOfCoincidence: number = searchedSong.indexOf(sound);

            return searchedSong.slice(indexOfCoincidence + 1, searchedSong.length).join(", ");
        }

        return "";
    }
}
