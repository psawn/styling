import { useState } from "react";
// import { styled } from "styled-components";
import { Button } from "./Button";
import { CustomInput } from "./Input";
import classes from "./Header.module.css";
// when import header module but not use, the css will not apply,
// otherwise, the compone will be apply to all

// const ControlContainerr = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
//   margin-bottom: 1.5rem;
// `;

// const Label = styled.label<{ $invalid?: boolean }>`
//   display: block;
//   margin-bottom: 0.5rem;
//   font-size: 0.75rem;
//   font-weight: 700;
//   letter-spacing: 0.1em;
//   text-transform: uppercase;
//   color: ${({ $invalid }) => ($invalid ? "#f87171" : "#6b7280")};
// `;

// const Input = styled.input<{ $invalid?: boolean }>`
//   width: 100%;
//   padding: 0.75rem 1rem;
//   line-height: 1.5;
//   background-color: ${({ $invalid }) => ($invalid ? "#fed2d2" : "#d1d5db")};
//   color: ${({ $invalid }) => ($invalid ? "#ef4444" : "#374151")};
//   border: 1px solid ${({ $invalid }) => ($invalid ? "f73f3f" : "transparent")};
//   border-radius: 0.25rem;
//   box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
// `;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier: string, value: string) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div
      id="auth-inputs"
      className="w-full max-w-sm p-8 mx-auto rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800"
    >
      <div className="flex flex-col gap-2 mb-6">
        <CustomInput
          label="Email"
          invalid={emailNotValid}
          type="email"
          onChange={(event) => handleInputChange("email", event.target.value)}
        ></CustomInput>
        <CustomInput
          label="Password"
          invalid={passwordNotValid}
          type="password"
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
        ></CustomInput>
      </div>

      {/* <ControlContainerr>
        <CustomInput
          label="Email"
          invalid={emailNotValid}
          type="email"
          onChange={(event) => handleInputChange("email", event.target.value)}
        ></CustomInput>
        <CustomInput
          label="Password"
          invalid={passwordNotValid}
          type="password"
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
        ></CustomInput>
      </ControlContainerr> */}

      {/* <p className="paragraph">
          <Label $invalid={emailNotValid}>Email</Label>
          <Input
            $invalid={emailNotValid}
            type="email"
            // style={{
            //   backgroundColor: emailNotValid ? '#fed2d2' : '#d1d5db'
            // }}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p>
        <p>
          <Label className={`label ${emailNotValid ? "invalid" : ""}`}>
            Password
          </Label>
          <Input
            type="password"
            className={passwordNotValid ? "invalid" : undefined}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </p> */}

      <div className="flex justify-end gap-4">
        <button type="button" className="text-amber-400 hover:text-amber-500">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
      <p className='test'>Not change color when import css module</p>
      <p className={classes.test}>Change color when import css module</p>
    </div>
  );
}
