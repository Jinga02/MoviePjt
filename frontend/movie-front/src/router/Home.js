import "../CSS/router/Home.css";
import "../CSS/sign/SignUp.css";
import "../CSS/sign/Login.css";
import { useState } from "react";
import Modal from "react-modal";
import SignUpModal from "../component/sign/SignUpModal";
import LoginModal from "../component/sign/LoginModal";

export default function Home() {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openSignUpModal = () => {
    setIsSignUpOpen(true);
  };

  const openLoginModal = () => {
    setIsLoginOpen(true);
  };

  const closeSignUpModal = () => {
    setIsSignUpOpen(false);
  };

  const closeLoginModal = () => {
    setIsLoginOpen(false);
  };

  Modal.setAppElement("#root");
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
  return (
    <div id="Home">
      <h1>Home</h1>
      <div>
        <img
          id="logo1"
          src="https://github.com/Jinga02/MoviePjt/assets/110621233/67c5c78d-86f9-4b21-a234-a7f1efdce154"
          alt="로고"
        />
      </div>
      <div>
        <button id="login" onClick={openLoginModal}>
          시작하기
        </button>
        <button id="signUp" onClick={openSignUpModal}>
          회원가입
        </button>
      </div>

      {/* 로그인 모달 */}
      <Modal
        style={modalStyles}
        isOpen={isLoginOpen}
        onRequestClose={closeLoginModal}
      >
        <LoginModal closeLoginModal={closeLoginModal} />
        <button id="closeModal" onClick={closeLoginModal}>
          X
        </button>
      </Modal>
      {/* 회원가입 모달 */}
      <Modal
        style={modalStyles}
        isOpen={isSignUpOpen}
        onRequestClose={closeSignUpModal}
      >
        <SignUpModal closeSignUpModal={closeSignUpModal} />
        <button id="closeModal" onClick={closeSignUpModal}>
          X
        </button>
      </Modal>
    </div>
  );
}
