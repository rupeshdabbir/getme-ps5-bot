import * as scrape_target_util from "./scrape-target-util"
// @ponicode
describe("scrape_target_util.scrapeTarget", () => {
    test("0", async () => {
        await scrape_target_util.scrapeTarget({ key0: "Foo bar", key1: "foo bar", key2: "foo bar", key3: "This is a Text", key4: "This is a Text" })
    })

    test("1", async () => {
        await scrape_target_util.scrapeTarget({ key0: "Foo bar", key1: "This is a Text", key2: "Foo bar", key3: "Foo bar" })
    })

    test("2", async () => {
        await scrape_target_util.scrapeTarget({ key0: "foo bar", key1: "Foo bar", key2: "This is a Text", key3: "This is a Text" })
    })

    test("3", async () => {
        await scrape_target_util.scrapeTarget({ key0: "Hello, world!", key1: "This is a Text", key2: "Foo bar", key3: "foo bar" })
    })

    test("4", async () => {
        await scrape_target_util.scrapeTarget({})
    })

    test("5", async () => {
        await scrape_target_util.scrapeTarget({ key0: "", key1: "", key2: "", key3: "", key4: "" })
    })
})
