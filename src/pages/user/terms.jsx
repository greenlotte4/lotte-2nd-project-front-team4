import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/login/terms.css';

const Terms = () => {
  const [openSections, setOpenSections] = useState({});
  const navigate = useNavigate(); // useNavigate 훅 사용

  const toggleContent = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const checkTerms = (event) => {
    event.preventDefault(); // 기본 동작 방지
    const chk1 = document.getElementById('chk1').checked;
    const chk2 = document.getElementById('chk2').checked;
    const chk3 = document.getElementById('chk3').checked;

    if (chk1 && chk2 && chk3) {
      alert('모든 필수 약관에 동의하셨습니다.');
      navigate('/register'); // register 페이지로 이동
    } else {
      alert('필수 약관에 모두 동의해주세요.');
    }
  };

  return (
    <div className="login-container">
      <h2 className="titterm">
        <span className="tit">약관동의</span>
      </h2>
      <div className="main-wrapper">
        <div className="main-box">
          <section className="terms">
            <table className={openSections['terms1'] ? 'active' : ''}>
              <caption onClick={() => toggleContent('terms1')}>
                <span>
                  <span className="must">(필수)</span> 이용약관
                </span>
                <span className="toggle-icon">
                  {openSections['terms1'] ? 'v' : '>'}
                </span>
              </caption>
              <tbody>
                {openSections['terms1'] && (
                  <tr>
                    <td>
                      <textarea readOnly>이용약관 내용</textarea>
                      <p>
                        <label>
                          <input type="checkbox" id="chk1" name="chk1" />
                          동의합니다.
                        </label>
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            <table className={openSections['terms2'] ? 'active' : ''}>
              <caption onClick={() => toggleContent('terms2')}>
                <span>
                  <span className="must">(필수)</span> 전자금융 이용약관
                </span>
                <span className="toggle-icon">
                  {openSections['terms2'] ? 'v' : '>'}
                </span>
              </caption>
              <tbody>
                {openSections['terms2'] && (
                  <tr>
                    <td>
                      <textarea readOnly>전자금융 이용약관 내용</textarea>
                      <p>
                        <label>
                          <input type="checkbox" id="chk2" name="chk2" />
                          동의합니다.
                        </label>
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            <table className={openSections['terms3'] ? 'active' : ''}>
              <caption onClick={() => toggleContent('terms3')}>
                <span>
                  <span className="must">(필수)</span> 개인정보 수집동의
                </span>
                <span className="toggle-icon">
                  {openSections['terms3'] ? 'v' : '>'}
                </span>
              </caption>
              <tbody>
                {openSections['terms3'] && (
                  <tr>
                    <td>
                      <textarea readOnly>개인정보 수집동의 내용</textarea>
                      <p>
                        <label>
                          <input type="checkbox" id="chk3" name="chk3" />
                          동의합니다.
                        </label>
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            <div>
              <button
                type="button"
                className="btnCancel"
                onClick={() => navigate('/login')}
              >
                취소
              </button>
              <button type="button" className="btnNext" onClick={checkTerms}>
                다음
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
