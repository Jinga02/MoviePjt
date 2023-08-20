import { useNavigate } from "react-router-dom"; // 설치한 패키지
import Modal from "react-modal";
import SignUpModal from "./SignUpModal";
import axios from "axios";
import useInput from "../../hooks/useInput";
import { useCallback, useState } from "react";
import Swal from "sweetalert2";

export default function LoginModal({ closeLoginModal }) {
  const [id, onChangeId] = useInput("");
  const [pw, onChangePw] = useInput("");
  const navigate = useNavigate();

  // 로그인 실패
  const [logInError, setLogInError] = useState(false);

  // 회원이 아닌 사람 회원 가입으로
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const closeSignUpModal = () => {
    setIsSignUpOpen(false);
    closeLoginModal();
  };
  const openSignUpModal = () => {
    setIsSignUpOpen(true);
  };

  const modalStyles = {
    content: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "400px",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    },
    overlay: {
      background: "rgba(0, 0, 0, 0.5)",
      zIndex: 1000,
    },
  };
  const onSubmitForm = useCallback(
    (event) => {
      event.preventDefault();
      axios({
        method: "POST",
        url: "http://127.0.0.1:8000/accounts/login/",
        data: {
          username: id,
          password: pw,
        },
      })
        .then((response) => {
          const token = response.data.key;
          axios({
            method: "GET",
            url: "http://127.0.0.1:8000/accounts/user/",
            headers: {
              Authorization: `Token ${token}`,
            },
          }).then((response) => {
            const username = response.data.username;
            const userId = response.data.pk;
            localStorage.setItem(
              "user",
              JSON.stringify({ username, userId, token }),
            );

            Swal.fire({
              icon: "success",
              title: "로그인 성공!",
              text: "beomflix",
              showConfirmButton: false,
              timer: "1500",
            });
            navigate("/main");
          });
        })

        .catch((error) => {
          setLogInError(error.response?.status === 400);
          console.log(error); // 에러 처리
        });
    },
    [id, pw],
  );

  return (
    <div id="loginModal">
      <h1>로그인</h1>
      <div id="loginInput">
        <form onSubmit={onSubmitForm}>
          <span>
            <label htmlFor="loginId">ID : </label>
            <input type="text" id="loginId" value={id} onChange={onChangeId} />
          </span>
          <span>
            <label htmlFor="loginPw"> PW : </label>
            <input
              type="password"
              id="loginPw"
              value={pw}
              onChange={onChangePw}
              placeholder="최소 8자 이상"
            />
          </span>
          <div id="loginBnt">
            <button> 로그인</button>
            <span style={{ display: "flex", fontSize: "18px" }}>
              <p>아직 회원이 아니신가요? &nbsp;</p>
              <p
                style={{ color: "blue", cursor: "pointer" }}
                onClick={openSignUpModal}
              >
                회원가입 하러가기
              </p>
            </span>
            {logInError && (
              <h4 style={{ color: "red" }}>
                아이디 또는 비밀번호를 잘못 입력했습니다.<br></br>
                입력하신 내용을 다시 확인해주세요.
              </h4>
            )}
          </div>
        </form>
      </div>
      {/* 회원가입 모달 */}

      <Modal
        style={modalStyles}
        isOpen={isSignUpOpen}
        onRequestClose={closeSignUpModal}
      >
        <SignUpModal />
        <button id="closeModal" onClick={closeSignUpModal}>
          X
        </button>
      </Modal>
    </div>
  );
}
