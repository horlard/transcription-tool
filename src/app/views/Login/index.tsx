import React, { useState } from "react";
import { styled } from "twin.macro";
import Logo from "../../assets/images/lasu_logo.png";

import { ReactComponent as Eye } from "../../assets/icons/eye.svg";
import { ReactComponent as EyeOff } from "../../assets/icons/eye-off.svg";
import useLoginUser from "./hooks/useLoginUser";
import Loader from "../../components/Loader";
import { AxiosResponse } from "axios";
import { loginResponse } from "../../api/auth";

export default function Login() {
  const [showText, setShowText] = useState<boolean>(false);

  const [password, setPassword] = useState("");
  const [email, setemail] = useState("");

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setemail(e.target.value);
  };

  const { isLoading, loginUser } = useLoginUser();

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const disableBtn = Boolean(
    email === "" || password === "" || !email.match(emailRegex) || isLoading
  );

  return (
    <>
      <div tw="flex justify-center items-center">
        <img src={Logo} alt="lasu" tw="w-[90px] h-[50px]" />
        <div tw="text-center font-bold text-[1.4rem]">
          <p>Designed By Bisiriyu Saulih Oladipupo</p>
          <p>Department of Electronic and Computer Engineering</p>
          <p>Supervised By DR. A.I.O YUSSUFF</p>
        </div>
      </div>
      <Wrapper>
        <div>
          <div className="container">
            <h2>Log in to your account</h2>
            <form>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>

              <div>
                <label>Password</label>
                <input
                  type={showText ? "text" : "password"}
                  required
                  autoComplete="off"
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
              </div>

              <button
                disabled={disableBtn}
                type="button"
                onClick={() => {
                  loginUser(
                    {
                      email,
                      password,
                    },
                    {
                      onSuccess: (data: AxiosResponse<loginResponse>) => {
                        localStorage.setItem(
                          "access-token",
                          data.data.accessToken
                        );
                      },
                    }
                  );
                }}
              >
                {isLoading ? <Loader size="24" color="#eee" /> : "Login"}
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
    padding-top: 225px;

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
          background: #12a633;
          border: 1px solid #12a633;
          padding: 10px 16px;
          border-radius: 5px;
          color: #fff;
          font-size: 16px;
          font-weight: 600;
          display: flex;
          justify-content: center;

          &:hover {
            background: #077e21;
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

          button {
            position: absolute;
            top: 28px;
            right: 3px;
            z-index: 999;
            background: #fff;
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
