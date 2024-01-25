import { User } from "../model/user.model";

const fetchUsers = async () => {
  const response = (await fetch("/users.json")).json();
  return (await response) as User[];
};

export { fetchUsers };
