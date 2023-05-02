import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { InMemoryUsersRepository } from "../../repositories/in-memory/in-memory-users-repository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const inMemoryUsersRepository = new InMemoryUsersRepository();
const mailTrapMailProvider = new MailtrapMailProvider();

const createUserUseCase = new CreateUserUseCase(
  inMemoryUsersRepository,
  mailTrapMailProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
