const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.EDGE).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test("clicking the Draw button displays robot choices", async () => {
    // Navigate to Duel Duo site
    await driver.get("http://localhost:8000");
    // Click on the "Draw" button
    await driver.findElement(By.id("draw")).click()
    // Wait until we can select the element that displays the div
    await driver.wait(until.elementLocated(By.id("choices")), 1000)
    // Check that clicking the Draw button displays the div with id = “choices”
  });

  // Check that clicking an “Add to Duo” button displays the div with id = “player-duo”
  test("page is doing something", async () => {
    // Navigate to Duel Duo site
    await driver.get("http://localhost:8000");
    // Click on the "Draw" button
    await driver.findElement(By.id("draw")).click()
    // Wait until we can select the element that displays the div
    await driver.wait(until.elementLocated(By.id("choices")), 1000)
    // Click on the "Add to Duo" button
    await driver.findElement(By.className("bot-btn")).click()
    // Wait until we can see the element that displays the div with player choices
    await driver.wait(until.elementLocated(By.id("player-duo")), 1000)
  });
  
  // Check that when a bot is “Removed from Duo”, that it goes back to “choices”
  // test("page is doing something", async () => {
  //   await driver.get("http://localhost:8000");
  //   await driver.wait()
  // My logic (if I have time to do this):
  // Locate the robot with the id you have in your Player Duo
  // Click that robot's "Remove from Duo" button
  // Check that the robot with same id is in div of choices again
  // How to specific robot id if you don't know which robot will randomly get added to the player duo?
  // });
});