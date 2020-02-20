import * as express from 'express';
import { interfaces, controller, httpGet, request, response } from "inversify-express-utils";
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

    @httpGet("/")
    public async index (@request() req: express.Request, @response() res: express.Response) {
        try {
            const posts = await this._musicalLakeService.findAll();
            res.status(200).json(posts);
        } catch(error) {
            res.status(400).json(error);
        }
    }
}
