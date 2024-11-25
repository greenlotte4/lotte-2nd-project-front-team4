import React, { useState } from "react";
import "../../styles/login/find.css";

const FindId = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [receivedCode, setReceivedCode] = useState("");
  const [isEmailOk, setIsEmailOk] = useState(false);
  const [resultMessage, setResultMessage] = useState("");
  const [preventDblClick, setPreventDblClick] = useState(false);

  // 인증번호 받기 버튼 클릭
  const handleSendEmail = async () => {
    if (preventDblClick) return;

    if (!email || !name) {
      setResultMessage("이름과 이메일을 모두 입력하세요.");
      return;
    }

    try {
      setPreventDblClick(true);

      const response = await fetch("/Lion/user/id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name }),
      });

      const data = await response.json();
      console.log(data.code);
      setReceivedCode(data.code);

      if (data.result) {
        setResultMessage("인증번호가 발송되었습니다.");
      } else {
        setResultMessage("다시 시도해주세요.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResultMessage("오류가 발생했습니다.");
    } finally {
      setPreventDblClick(false);
    }
  };

  // 이메일 인증 확인 버튼 클릭
  const handleVerifyCode = () => {
    if (receivedCode === code) {
      setIsEmailOk(true);
      alert("인증되었습니다.");
    } else {
      alert("인증번호가 일치하지 않습니다.");
    }
  };

  // 제출 버튼 클릭
  const handleSubmit = (event) => {
    if (!isEmailOk) {
      event.preventDefault();
      alert("이메일 인증을 완료해 주세요.");
    }
  };

  return (
    <div className="mainIn">
      <div className="findid">
        <form onSubmit={handleSubmit} className="findIdForm">
          <section>
            <div className="headtxt">
              <span>아이디 찾기 - 개인구매회원</span>
            </div>
            <div className="form-container">
              <div className="form-group">
                <label htmlFor="name">이름</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="이름을 입력해 주세요"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">이메일</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="이메일을 입력해 주세요"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="button"
                  className="btnSendEmail"
                  onClick={handleSendEmail}
                  disabled={preventDblClick}
                >
                  인증번호 받기
                </button>
                {resultMessage && (
                  <span
                    className="resultEmail"
                    style={{
                      color: resultMessage.includes("발송") ? "green" : "red",
                    }}
                  >
                    {resultMessage}
                  </span>
                )}
              </div>
              <div className="form-group email-code">
                <input
                  type="text"
                  id="code"
                  placeholder="인증번호를 입력해 주세요"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
                <button
                  type="button"
                  className="btnAuthEmail"
                  onClick={handleVerifyCode}
                >
                  인증확인
                </button>
              </div>
            </div>
            <div className="findnote">
            <p>
              회원가입 시 입력한 이메일 주소와 입력한 이메일 주소가 같아야
              인증번호를 받을 수 있습니다.
              <br />
              인증번호를 입력 후 확인 버튼을 누르세요.
            </p>
          </div>
          <div className="btns">
            <button id="submitBtn2" type="submit" className="btn_next">
              확인
            </button>
          </div>
          </section>
        </form>
      </div>
    </div>
  );
};

export default FindId;
