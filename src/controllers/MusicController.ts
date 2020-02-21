import * as express from 'express';
import {interfaces, controller, httpGet, request, response, requestParam} from "inversify-express-utils";
import {IMusicalLakeService} from "../repository/IMusicalLakeService";
import {inject} from "inversify";
import IDENTIFIERS from "../constant/Identifiers";

@controller("/music")
export class MusicController implements interfaces.Controller {

    private readonly _musicalLakeService: IMusicalLakeService;

    constructor(
        @inject(IDENTIFIERS.IMusicalLakeService) musicalLakeService: IMusicalLakeService
    ) {
        this._musicalLakeService = musicalLakeService;
    }

    @httpGet("/:sound")
    public async index (@requestParam("sound") sound: string, @request() req: express.Request, @response() res: express.Response) {
        try {
            const remainingSounds = await this._musicalLakeService.getRemainingSounds(sound);
            res.status(200).json(remainingSounds);
        } catch(error) {
            res.status(400).json(error);
        }
    }
}
