import { uuid } from "uuidv4";

interface UserProps {
  id: string;
  name: string;
  email: string;
  password: string;
}
export class User {
  public readonly id: string;

  public props: UserProps;

  get email() {
    return this.props.email;
  }

  get name() {
    return this.props.name;
  }

  constructor(props: Omit<UserProps, "id">, id?: string) {
    this.id = id ? id : uuid();
    this.props = { ...props, id: this.id };
  }
}
