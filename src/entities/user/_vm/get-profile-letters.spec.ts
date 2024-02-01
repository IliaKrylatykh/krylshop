import { getProfileLetters } from "./get-profile-letters";

describe("get profile letters", () => {
  test("should split by .", () => {
    const res = getProfileLetters({
      email: "ilia.krylstykh@gmail.com",
    });

    expect(res).toEqual("IK");
  });

  test("should split by -", () => {
    const res = getProfileLetters({
      email: "elia.krylstykh@gmail.com",
      name: "Ilia-Krylatykh",
    });

    expect(res).toEqual("IK");
  });

  test("should split by _", () => {
    const res = getProfileLetters({
      email: "elia.krylstykh@gmail.com",
      name: "Ilia-Krylatykh",
    });

    expect(res).toEqual("IK");
  });

  test("should split by space", () => {
    const res = getProfileLetters({
      email: "elia.krylstykh@gmail.com",
      name: "Ilia Krylatykh",
    });

    expect(res).toEqual("IK");
  });

  test("should return first 2 letters if no separator", () => {
    const res = getProfileLetters({
      email: "elia.krylstykh@gmail.com",
      name: "IliaKrylatykh",
    });

    expect(res).toEqual("IL");
  });
  test("should return first 2 letters if no separator email", () => {
    const res = getProfileLetters({
      email: "admin@gmail.com",
    });

    expect(res).toEqual("AD");
  });
  test("should return email if empty username", () => {
    const res = getProfileLetters({
      email: "admin@gmail.com",
      name: "",
    });

    expect(res).toEqual("AD");
  });

  test("should work with short names", () => {
    const res = getProfileLetters({
      email: "admin@gmail.com",
      name: "I",
    });

    expect(res).toEqual("I");
  });
});
