import { Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./pages/login/Login.js";
import FindId from "./pages/login/FindId.js";
import FindIdComplete from "./pages/login/FindIdComplete.js";
import FindPassword from "./pages/login/FindPassword.js";
import PasswordReset from "./pages/login/PasswordReset.js";
import ResetPasswordComplete from "./pages/login/ResetPasswordComplete.js";
import Position from "./pages/position/Position.js";
import Company from "./pages/company/Company.js";
import Suggest from "./pages/suggest/Suggest.js";
import Program from "./pages/program/Program.js";
import ProgramDetail from "./pages/program/ProgramDetail.js";
import Contents from "./pages/contents/Contents.js";
import ContentsDetail from "./pages/contents/ContentsDetail.js";
import MyPage from "./pages/mypage/MyPage.js";
import Join from "./pages/join/Join.js";
import JoinDev from "./pages/join/JoinDev.js";
import JoinCompany from "./pages/join/JoinCompany.js";
import JoinDevBasic from "./pages/join/JoinDevBasic.js";
import JoinDevCareer from "./pages/join/JoinDevCareer.js";
import ApplyCompanyBasic from "./pages/position/ApplyCompanyBasic.js";
import ApplyCompanyCareer from "./pages/position/ApplyCompanyCareer.js";
import ApplyCompanyIntroduce from "./pages/position/ApplyCompanyIntroduce.js";
import Terms from "./pages/common/Terms.js";
import PrivacyPolicy from "./pages/common/PrivacyPolicy.js";
import Notice from "./pages/common/Notice.js";
import JoinCompanyDetail from "./pages/join/JoinCompanyDetail.js";
import Developer from "./pages/developer/Developer.js";
import Employment from "./pages/employment/Employment.js";
import ReceiveDocCheck from "./pages/employment/ReceiveDocCheck.js";
import AskWriting from "./pages/mypage/AskWriting.js";
import MyPageCompany from "./pages/mypage/MyPageCompany.js";
import AskDetail from "./pages/mypage/AskDetail.js";
import Ask from "./pages/mypage/Ask.js";
import DevScrapList from "./pages/mypage/DevScrapList.js";
import MyPageCompanyInfo from "./pages/mypage/MyPageCompanyInfo.js";
import CompanyInfoDetail from "./pages/mypage/CompanyInfoDetail.js";

const WalterRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/find-id" element={<FindId />} />
      <Route path="/find-id-complete" element={<FindIdComplete />} />
      <Route path="/find-pw" element={<FindPassword />} />
      <Route path="/reset-pw" element={<PasswordReset />} />
      <Route path="/reset-pw-complete" element={<ResetPasswordComplete />} />
      <Route path="/join" element={<Join />} />
      <Route path="/join/developer" element={<JoinDev />} />
      <Route path="/join/developer/step1" element={<JoinDevBasic />} />
      <Route path="/join/developer/step2" element={<JoinDevCareer />} />
      <Route path="/join/startup" element={<JoinCompany />} />
      <Route path="/join/startup/step2" element={<JoinCompanyDetail />} />
      <Route path="/position" element={<Position />} />
      <Route path="/company/:id" element={<Company />} />
      <Route path="/apply/step1" element={<ApplyCompanyBasic />} />
      <Route path="/apply/step2" element={<ApplyCompanyCareer />} />
      <Route path="/apply/step3" element={<ApplyCompanyIntroduce />} />
      <Route path="/suggest" element={<Suggest />} />
      <Route path="/program" element={<Program />} />
      <Route path="/program/:id" element={<ProgramDetail />} />
      <Route path="/contents" element={<Contents />} />
      <Route path="/contents/:id" element={<ContentsDetail />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/mypage-startup/devscrap" element={<DevScrapList />} />
      {/* <Route path="/mypage-startup" element={<MyPageCompany />} /> */}
      <Route path="/mypage-startup" element={<MyPageCompanyInfo />} />
      <Route
        path="/mypage-startup/information"
        element={<CompanyInfoDetail />}
      />
      <Route path="/mypage/ask" element={<Ask />} />
      <Route path="/mypage/ask/:id" element={<AskDetail />} />
      <Route path="/mypage/ask/writing" element={<AskWriting />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/notice" element={<Notice />} />
      <Route path="/developer" element={<Developer />} />
      <Route path="/employment" element={<Employment />} />
      <Route path="/employment/receive" element={<ReceiveDocCheck />} />
    </Routes>
  );
};

export default WalterRouter;
