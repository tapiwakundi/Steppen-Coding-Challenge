const extractUrlFromBody = require("../extractUrlFromBody");

it("Returns wikipedia page name", () => {
  const wikiPageName = extractUrlFromBody(
    "https://en.wikipedia.org/wiki/Production_car_speed_record"
  );

  if (wikiPageName != "Production_car_speed_record")
    throw new Error(
      "Should have returned: Production_car_speed_record but got " +
        wikiPageName
    );
});
