import { User } from "../../entities/User/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUsetDTO";

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ) {}

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      data.email
    );
    if (userAlreadyExists) throw new Error("User Already Exists");

    const user = new User(data);
    await this.usersRepository.save(user);

    this.mailProvider.sendMail({
      to: {
        email: data.email,
        name: data.name,
      },
      from: {
        email: "m.pereira@acad.ifma.edu.br",
        name: "Equipe",
      },
      subject: "Seja bem vindo",
      body: "Faça bom proveito",
    });
  }
}
