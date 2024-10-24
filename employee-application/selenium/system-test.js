import { Builder, until } from "selenium-webdriver";
import { expect } from "chai";

describe("Google front page", function () {
  it("should have correct title", async function () {
    const driver = await new Builder().forBrowser("firefox").build();
    await driver.get("http://www.google.com");
    await driver.wait(until.titleIs("Google"), 1000);
    const title = await driver.getTitle();
    expect(title).to.include("Google");
  });
});
