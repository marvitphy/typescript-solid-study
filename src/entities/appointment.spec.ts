import { expect, test } from "vitest";
import { Appointment } from "./appointment";

test("should create and appointment", () => {
  const startsAt = new Date();
  const endsAt = new Date();
  endsAt.setDate(endsAt.getDate() + 1);
  const appointment = new Appointment({
    costumer: "John Doe",
    startsAt,
    endsAt,
  });

  expect(appointment).toBeInstanceOf(Appointment);
});

test("cannot create an appointment with end date before start date", () => {
  const startsAt = new Date();
  const endsAt = new Date();
  endsAt.setDate(endsAt.getDate() - 1);

  expect(() => {
    return new Appointment({
      costumer: "John Doe",
      startsAt,
      endsAt,
    });
  }).toThrow();
});
