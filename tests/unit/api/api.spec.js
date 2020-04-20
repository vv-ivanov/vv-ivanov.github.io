import { shallowMount } from "@vue/test-utils";
import { Users } from "../../../src/api/";

describe("API: Users", () => {
  it("getUserData", async () => {
    const RESPONSE = await Users.getUserData();
    expect(RESPONSE).toMatchSnapshot();
  });
});
