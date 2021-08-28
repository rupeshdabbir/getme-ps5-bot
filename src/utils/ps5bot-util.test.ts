import rewire from "rewire"
const ps5bot_util = rewire("./ps5bot-util")
const snakeCaseToSpaceSeparatedWord = ps5bot_util.__get__("snakeCaseToSpaceSeparatedWord")
// @ponicode
describe("snakeCaseToSpaceSeparatedWord", () => {
    test("0", () => {
        let callFunction: any = () => {
            snakeCaseToSpaceSeparatedWord("v4.0.0-rc.4")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            snakeCaseToSpaceSeparatedWord("V4.0.0-RC.4")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            snakeCaseToSpaceSeparatedWord("v4.0.0-RC.4")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            snakeCaseToSpaceSeparatedWord("^5.0.0")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            snakeCaseToSpaceSeparatedWord("4.0.0-beta1\t")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            snakeCaseToSpaceSeparatedWord("")
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("ps5bot_util.inputSchedule", () => {
    test("0", async () => {
        await ps5bot_util.inputSchedule(undefined)
    })
})

// @ponicode
describe("ps5bot_util.inputTargetEmailPassword", () => {
    test("0", async () => {
        await ps5bot_util.inputTargetEmailPassword(undefined, undefined, "user@host:300")
    })

    test("1", async () => {
        await ps5bot_util.inputTargetEmailPassword(undefined, undefined, "user1+user2@mycompany.com")
    })

    test("2", async () => {
        await ps5bot_util.inputTargetEmailPassword(undefined, undefined, "ponicode.com")
    })

    test("3", async () => {
        await ps5bot_util.inputTargetEmailPassword(undefined, undefined, "something.example.com")
    })

    test("4", async () => {
        await ps5bot_util.inputTargetEmailPassword(undefined, undefined, "bed-free@tutanota.de")
    })

    test("5", async () => {
        await ps5bot_util.inputTargetEmailPassword(undefined, undefined, "")
    })
})
