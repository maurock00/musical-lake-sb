import { expect, use } from "chai"
import sinonChai = require("sinon-chai");

use(sinonChai)

describe("Test setup", () => {
    it("Firste test", () => {
        expect(true).to.be.true;
    });
});
