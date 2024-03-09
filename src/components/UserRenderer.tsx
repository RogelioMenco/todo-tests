import { useEffect, useState } from "react";

type User = {
  first: string;
  last: string;
  username: string;
  password: string;
  id: string;
};

const UserRender = () => {
  const initialUser: User = {
    first: "nom",
    last: "nmsad",
    password: "1212",
    username: "namekk",
    id: "a",
  };

  const [user, setUser] = useState<User>(initialUser);

  const editUser = (user: Partial<User>) => {
    const newUser: User = { ...initialUser, ...user };
    setUser(newUser);
  };

  useEffect(() => {
    editUser({
      first: "Nuevo",
      password: "776655",
    });
  }, []);

  return (
    <div className="mt-6">
      {Object.entries(user).map(([attr, value]) => (
        <>
          <p>
            <b>{attr}:</b> {value}
          </p>
        </>
      ))}
    </div>
  );
};

export default UserRender;
