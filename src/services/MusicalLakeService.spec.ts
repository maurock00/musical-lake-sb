import {expect, use} from "chai"
import {IMusicalLakeService} from "../repository/IMusicalLakeService";
import CONTAINER from "../infrastructure/Container";
import IDENTIFIERS from "../constant/Identifiers";
import {SoundEnum} from "../infrastructure/SoundsEnum";
import sinonChai = require("sinon-chai");

use(sinonChai);

describe("MusicalLakeService", () => {

    let service: IMusicalLakeService;

    beforeEach(async () => {
        CONTAINER.snapshot();
    });

    afterEach( () => {
       CONTAINER.restore();
    });

    it("getRemainingSounds should returns fiu, cric-cric, brrah with brr", () => {
        service = CONTAINER.get(IDENTIFIERS.IMusicalLakeService);
        const rs: string = service.getRemainingSounds(SoundEnum.BRR);

        expect(rs).to.be.eqls([SoundEnum.FIU, SoundEnum.CRIC, SoundEnum.BRRAH].join(", "));
    });

    it("getRemainingSounds should returns trri-trri, croac with birip", () => {
        service = CONTAINER.get(IDENTIFIERS.IMusicalLakeService);
        const rs: string = service.getRemainingSounds(SoundEnum.BIRIP);

        expect(rs).to.be.eqls([SoundEnum.TRRI, SoundEnum.CROAC].join(", "));
    });

    it("getRemainingSounds should returns cric-cric, brrah with plop", () => {
        service = CONTAINER.get(IDENTIFIERS.IMusicalLakeService);
        const rs: string = service.getRemainingSounds(SoundEnum.PLOP);

        expect(rs).to.be.eqls([SoundEnum.CRIC, SoundEnum.BRRAH].join(", "));
    });

    it("getRemainingSounds should returns nothing with an unknown sound", () => {
        service = CONTAINER.get(IDENTIFIERS.IMusicalLakeService);
        const rs: string = service.getRemainingSounds("hello beautiful team =)");

        expect(rs).to.be.eqls("");
    });

    it("getRemainingSounds should returns nothing with brrah", () => {
        service = CONTAINER.get(IDENTIFIERS.IMusicalLakeService);
        const rs: string = service.getRemainingSounds(SoundEnum.BRRAH);

        expect(rs).to.be.eqls("");
    });

    it("getRemainingSounds should returns brrah with cric-cric", () => {
        service = CONTAINER.get(IDENTIFIERS.IMusicalLakeService);
        const rs: string = service.getRemainingSounds(SoundEnum.CRIC);

        expect(rs).to.be.eqls(SoundEnum.BRRAH);
    })

    it("getRemainingSounds should returns plop, cric-cric, brrah with bri-bri", () => {
        service = CONTAINER.get(IDENTIFIERS.IMusicalLakeService);
        const rs: string = service.getRemainingSounds(SoundEnum.BRI);

        expect(rs).to.be.eqls([SoundEnum.PLOP, SoundEnum.CRIC, SoundEnum.BRRAH].join(", "));
    });
});
