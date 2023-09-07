import React, { useState } from "react";
import { Link } from "react-router-dom";

type EventChange = React.ChangeEvent<HTMLInputElement>;
type FormEvent = React.FormEvent<HTMLFormElement>;
interface Values {
  userName: string;
  password: string;
}
const Settings = () => {
  const [required, setRequired] = useState<Values>({
    userName: "",
    password: "",
  });

  const handleChange = (ev: EventChange) => {
    const { name, value } = ev.target;
    setRequired({
      ...required,
      [name]: value,
    });
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();

    const u = "Noa",
      p = "1001363500";

    const { password, userName } = required;
    if (password !== p || u !== userName)
      alert("Data not match, please sign up");

    window.history.pushState(null, "", "/settings/home");
  };

  return (
    <section className="Main__settings">
      <form className="Main__form" onSubmit={handleSubmit}>
        <h2>Sign in</h2>

        <div className="Main__div">
          <label htmlFor="">User Name</label>
          <input
            className="Main__input"
            type="text"
            placeholder="user name:"
            onChange={handleChange}
            name="userName"
          />

          {required.userName !== "Noa" ? (
            <span className="Main__span">
              Data not match with the username!{" "}
            </span>
          ) : null}
        </div>

        <div className="Main__div">
          <label htmlFor="">Password</label>
          <input
            className="Main__input"
            type="password"
            name="password"
            placeholder="password:"
            onChange={handleChange}
          />
          {required.password !== "1001363500" ? (
            <span className="Main__span">
              Data not match with the password!
            </span>
          ) : null}
        </div>

        <button className="Main__button">
          {required.userName === "Noa" && required.password === "1001363500" ? (
            <Link to={"home"} className="Main__a">
              sign in
            </Link>
          ) : (
            "sign in"
          )}
        </button>
      </form>
    </section>
  );
};

export default Settings;
