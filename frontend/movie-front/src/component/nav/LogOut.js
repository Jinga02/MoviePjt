import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function LogOut() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user");
    Swal.fire({
      icon: "success",
      title: "로그아웃 되었습니다.",
      text: "beomflix",
      showConfirmButton: false,
      timer: "1500",
    });
    navigate("/");
    // window.location.reload(); // 페이지 새로고침
  };
  return <p onClick={logout}>LogOut</p>;
}
