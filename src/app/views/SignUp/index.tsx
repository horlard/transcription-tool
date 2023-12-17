import React, { useState } from "react";
import { styled } from "twin.macro";
import Logo from "../../assets/images/lasu_logo.png";

import { ReactComponent as Eye } from "../../assets/icons/eye.svg";
import { ReactComponent as EyeOff } from "../../assets/icons/eye-off.svg";
import { Link } from "react-router-dom";
import useRegisterUser from "./hooks/useRegisterUser";
import Loader from "../../components/Loader";

export default function SignUp() {
  const [showText, setShowText] = useState<boolean>(false);

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const { isLoading, registerUser } = useRegisterUser();

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const disableBtn = Boolean(
    email === "" ||
      password === "" ||
      !email.match(emailRegex) ||
      isLoading ||
      username === ""
  );

  return (
    <>
      <div tw="flex justify-center items-center gap-[20px]">
        <img src={Logo} alt="lasu" tw="w-[70px] h-[50px]" />
        <div tw="text-center font-bold text-[1.4rem]">
          <p>Designed By Bisiriyu Saulih Oladipupo</p>
          <p>Department of Electronic and Computer Engineering</p>
          <p>Supervised By DR. A.I.O YUSSUFF</p>
        </div>
      </div>
      <Wrapper>
        <div>
          <div className="container">
            <h2>Get started with an account</h2>
            <form action="">
              <div>
                <label>Username</label>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={handleUsernameChange}
                />
              </div>

              <div>
                <label>Email</label>
                <input
                  type="text"
                  required
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>

              <div>
                <label>Password</label>
                <input
                  type={showText ? "text" : "password"}
                  required
                  value={password}
                  onChange={handlePasswordChange}
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setShowText((s) => !s);
                  }}
                >
                  {showText ? <EyeOff /> : <Eye />}
                </button>
                <span>
                  Have an account? <Link to="/login">Login</Link>
                </span>
              </div>
              <button
                disabled={disableBtn}
                type="button"
                onClick={() => registerUser({ username, email, password })}
              >
                {isLoading ? <Loader size="24" color="#eee" /> : "Register"}
              </button>
            </form>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    padding-top: 150px;

    > .container {
      h2 {
        font-size: 25px;
        font-weight: 600;
        text-align: center;
        margin-bottom: 25px;
      }
      background-color: #fff;
      padding: 20px;
      border: 1px solid rgba(91, 97, 110, 0.2);
      border-radius: 8px;

      > form {
        display: flex;
        flex-direction: column;
        gap: 20px;

        > button {
          background: #252dc4e8;
          border: 1px solid #252dc4e8;
          padding: 10px 16px;
          border-radius: 5px;
          color: #fff;
          font-size: 16px;
          font-weight: 600;
          display: flex;
          justify-content: center;

          &:hover {
            background: #252dc4;
          }

          &:disabled {
            opacity: 0.4;
          }
        }

        div {
          display: flex;
          flex-direction: column;
          gap: 5px;
          position: relative;

          span {
            color: #594d4d;
            font-size: 12px;

            a {
              color: #12a633;
              text-decoration: underline;
            }
          }

          button {
            position: absolute;
            top: 28px;
            right: 3px;
            z-index: 999;
            padding: 11px;
            font-weight: 500;
            font-size: 11px;
            svg {
              width: 16px;
              height: 16px;
            }
          }

          label {
            font-size: 14px;
          }
        }

        input {
          width: 400px;
          border: 1px solid rgba(91, 97, 110, 0.2);
          border-radius: 8px;
          padding: 10px;
          font-size: 16px;
          &:focus {
            outline: 1px solid #000;
          }
        }
      }
    }
  }
`;
