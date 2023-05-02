import { describe, expect, it } from "vitest";
import { Appointment } from "../entities/appointment";
import { InMemoryAppointmentRepository } from "../repositories/in-memory/in-memory-appointments-repository";
import { CreateAppointment } from "./create-appointment";

describe("create appointment", () => {
  it("should be able to create an appointment", () => {
    const startsAt = new Date();
    const endsAt = new Date();
    endsAt.setDate(endsAt.getDate() + 1);
    const appointmentsRpository = new InMemoryAppointmentRepository();
    const createAppointment = new CreateAppointment(appointmentsRpository);
    expect(
      createAppointment.execute({
        costumer: "John Doe",
        startsAt,
        endsAt,
      })
    ).resolves.toBeInstanceOf(Appointment);
  });
  it("should not be able to create an appointment", () => {
    const startsAt = new Date();
    const endsAt = new Date();
    endsAt.setDate(endsAt.getDate() + 1);
    const appointmentsRpository = new InMemoryAppointmentRepository();
    const createAppointment = new CreateAppointment(appointmentsRpository);
    expect(
      createAppointment.execute({
        costumer: "John Doe",
        startsAt,
        endsAt,
      })
    ).resolves.toBeInstanceOf(Appointment);
  });
});
