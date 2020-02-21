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
        service = CONTAINER.get(IDENTIFIERS.IMusicalLakeService);
    });

    afterEach( () => {
       CONTAINER.restore();
    });

    it("getRemainingSounds should returns fiu, cric-cric, brrah with brr", () => {
        const rs: string = service.getRemainingSounds(SoundEnum.BRR);

        expect(rs).to.be.eqls([SoundEnum.FIU, SoundEnum.CRIC, SoundEnum.BRRAH].join(", "));
    });

    it("getRemainingSounds should returns trri-trri, croac with birip", () => {
        const rs: string = service.getRemainingSounds(SoundEnum.BIRIP);

        expect(rs).to.be.eqls([SoundEnum.TRRI, SoundEnum.CROAC].join(", "));
    });

    it("getRemainingSounds should returns cric-cric, brrah with plop", () => {
        const rs: string = service.getRemainingSounds(SoundEnum.PLOP);

        expect(rs).to.be.eqls([SoundEnum.CRIC, SoundEnum.BRRAH].join(", "));
    });

    it("getRemainingSounds should returns nothing with an unknown sound", () => {
        const rs: string = service.getRemainingSounds("hello beautiful team =)");

        expect(rs).to.be.eqls("");
    });

    it("getRemainingSounds should returns nothing with brrah", () => {
        const rs: string = service.getRemainingSounds(SoundEnum.BRRAH);

        expect(rs).to.be.eqls("");
    });

    it("getRemainingSounds should returns brrah with cric-cric", () => {
        const rs: string = service.getRemainingSounds(SoundEnum.CRIC);

        expect(rs).to.be.eqls(SoundEnum.BRRAH);
    })

    it("getRemainingSounds should returns plop, cric-cric, brrah with bri-bri", () => {
        const rs: string = service.getRemainingSounds(SoundEnum.BRI);

        expect(rs).to.be.eqls([SoundEnum.PLOP, SoundEnum.CRIC, SoundEnum.BRRAH].join(", "));
    });
});
