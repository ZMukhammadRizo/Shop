import React, { useState } from "react"
import picture from "../img/picture.svg"
import avatar from "../img/profile.svg"
import { FaUserAlt, FaLock } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { ProgressBar } from "react-loader-spinner"

const Login = () => {
  const navigate = useNavigate()
  const [load, setLoad] = useState(false)

  const navigateTo = (e) => {
    e.preventDefault()
    setLoad(true)
    setTimeout(() => {
      navigate("/")
    }, 2500)
  }
  return (
    <div className="login">
      <div className="container">
        <div className="img">
          <img src={picture} alt="" />
        </div>
        <div className="login-content">
          <form>
            <img src={avatar} alt="avatar" />
            <h2 className="title">Welcome</h2>
            <div className="input-div one">
              <div className="i">
                <FaUserAlt />
              </div>
              <div className="div">
                <input type="text" className="input" placeholder="Username" />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <FaLock />
              </div>
              <div className="div">
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
              </div>
            </div>
            <ProgressBar
              height="80"
              width="80"
              ariaLabel="progress-bar-loading"
              wrapperStyle={{}}
              wrapperClass="progress-bar-wrapper"
              borderColor="#55eb34"
              barColor="#5f28eb"
              visible={load}
            />
            <a href="/">Forgot Password?</a>
            <input
              type="submit"
              className="btn"
              value="Login"
              onClick={(e) => navigateTo(e)}
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
