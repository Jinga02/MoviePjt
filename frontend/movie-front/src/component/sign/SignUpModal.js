import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const SignUpModal = ({ closeSignUpModal }) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [cpw, setCpw] = useState("");

  const onIdHandler = (event) => {
    setId(event.currentTarget.value);
  };

  const onPwHandler = (event) => {
    setPw(event.currentTarget.value);
  };

  const onCpwHandler = (event) => {
    setCpw(event.currentTarget.value);
  };

  // axios
  const onSubmitForm = (event) => {
    event.preventDefault();
    if (id == "") {
      Swal.fire({
        icon: "error",
        title: "아이디를 입력해주세요.",
        text: "beomflix",
        showConfirmButton: false,
        timer: "1500",
      });
    }
    if (pw !== cpw) {
      Swal.fire({
        icon: "error",
        title: "비밀번호가 서로 다릅니다.",
        text: "beomflix",
        showConfirmButton: false,
        timer: "1500",
      });
    }
    if (pw.length < 8) {
      Swal.fire({
        icon: "error",
        title: "비밀번호는 8자 이상이어야합니다.",
        text: "beomflix",
        showConfirmButton: false,
        timer: "1500",
      });
    }
    if (id !== "" && pw == cpw && pw.length >= 8) {
      axios({
        method: "POST",
        url: "http://127.0.0.1:8000/accounts/signup/",
        data: {
          username: id,
          password1: pw,
          password2: cpw,
        },
      })
        .then((response) => {
          console.log(response); // 서버 응답 데이터 출력
          console.log(response.config.data);
          Swal.fire({
            icon: "success",
            title: "회원가입 완료!",
            text: "beomflix",
            showConfirmButton: false,
            timer: "1500",
          });
          closeSignUpModal();
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "이미 존재하는 ID입니다.",
            text: "beomflix",
            showConfirmButton: false,
            timer: "1500",
          });

          console.log(error); // 에러 처리
        });
    }
  };

  // fetch
  // const onSubmitForm = (event) => {
  //   event.preventDefault();
  //   if (pw !== cpw) {
  //     return alert("비밀번호와 비밀번호 확인이 같지 않습니다.");
  //   }
  //   fetch("http://127.0.0.1:8000/accounts/signup/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json;charset=utf-8" },
  //     body: JSON.stringify({
  //       username: id,
  //       password1: pw,
  //       password2: cpw,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div id="signUpModal">
      <h1>회원가입</h1>
      <div id="signInput">
        <form onSubmit={onSubmitForm}>
          <span>
            <label htmlFor="signId">ID : </label>
            <input type="text" id="signId" onChange={onIdHandler} />
          </span>
          <span>
            <label htmlFor="signPw"> PW : </label>
            <input
              type="password"
              id="signPw"
              onChange={onPwHandler}
              placeholder="최소 8자 이상"
            />
          </span>
          <span>
            <label htmlFor="CofirmPassword">Cofirm PW :</label>
            <input
              type="password"
              id="CofirmPassword"
              onChange={onCpwHandler}
            />
          </span>
          <div id="signBnt">
            <button>회원가입</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpModal;
