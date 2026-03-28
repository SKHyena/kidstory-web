import Link from "next/link";
import { BookOpen, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "개인정보처리방침 - KidStory",
  description: "KidStory 개인정보처리방침",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <nav className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-900" asChild>
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-1.5" />
                홈
              </Link>
            </Button>
            <div className="h-5 w-px bg-gray-200" />
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[var(--color-primary)] rounded-lg flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-gray-900">KidStory</span>
            </Link>
          </div>
        </nav>
      </header>

      {/* Content */}
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-2">개인정보처리방침</h1>
          <p className="text-sm text-gray-400 mb-12">시행일: 2024년 1월 1일 | 최종 수정일: 2024년 1월 1일</p>

          <div className="space-y-10 text-gray-600 leading-relaxed text-[15px]">
            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">1. 개인정보의 처리 목적</h2>
              <p>
                KidStory(이하 &quot;회사&quot;)는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>회원 가입 및 관리: 회원제 서비스 이용에 따른 본인 확인, 개인 식별, 가입 의사 확인, 연령 확인</li>
                <li>서비스 제공: AI 동화 생성, TTS 음성 서비스, 동화 라이브러리 관리, 맞춤형 콘텐츠 제공</li>
                <li>서비스 개선: 서비스 이용 통계, 서비스 품질 향상, 신규 서비스 개발</li>
                <li>고객 지원: 문의 접수 및 처리, 공지사항 전달</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">2. 수집하는 개인정보 항목</h2>
              <p>회사는 서비스 제공을 위해 아래와 같은 개인정보를 수집합니다.</p>
              <div className="mt-3 space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800">필수 수집 항목</h3>
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>이메일 주소, 비밀번호, 닉네임</li>
                    <li>아동 정보: 이름, 나이(연령대), 성별, 프로필 사진, 관심사(동화 주제 선호)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">자동 수집 항목</h3>
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>기기 정보(OS 종류, 기기 모델), 서비스 이용 기록, 접속 로그, 앱 버전 정보</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">3. 개인정보의 처리 및 보유 기간</h2>
              <p>
                회사는 법령에 따른 개인정보 보유·이용 기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용 기간 내에서 개인정보를 처리·보유합니다.
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>회원 정보: 회원 탈퇴 시까지 (탈퇴 후 30일 이내 파기)</li>
                <li>서비스 이용 기록: 3년 (전자상거래법)</li>
                <li>접속 로그: 3개월 (통신비밀보호법)</li>
                <li>결제 기록: 5년 (전자상거래법)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">4. 아동의 개인정보 보호</h2>
              <p>
                회사는 만 14세 미만 아동의 개인정보를 수집할 때 법정대리인의 동의를 받습니다. 아동의 개인정보는 해당 서비스 제공 목적으로만 이용되며, 법정대리인은 아동의 개인정보에 대한 열람, 수정, 삭제를 요청할 수 있습니다.
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>만 14세 미만 아동의 회원가입 시 법정대리인의 동의 절차를 진행합니다.</li>
                <li>법정대리인의 동의 없이 아동의 개인정보를 수집하지 않습니다.</li>
                <li>수집된 아동의 개인정보(사진 포함)는 동화 생성 및 맞춤 콘텐츠 제공 목적으로만 사용됩니다.</li>
                <li>아동의 프로필 사진은 AI 동화 삽화 생성에만 활용되며, 외부에 공개되지 않습니다.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">5. 개인정보의 제3자 제공</h2>
              <p>
                회사는 원칙적으로 정보주체의 개인정보를 제3자에게 제공하지 않습니다. 다만, 다음의 경우에는 예외로 합니다.
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>정보주체가 사전에 동의한 경우</li>
                <li>법률에 특별한 규정이 있거나 법령상 의무를 준수하기 위하여 불가피한 경우</li>
                <li>정보주체 또는 그 법정대리인이 의사표시를 할 수 없는 상태에 있거나 주소불명 등으로 사전 동의를 받을 수 없는 경우로서 명백히 정보주체 또는 제3자의 급박한 생명, 신체, 재산의 이익을 위하여 필요하다고 인정되는 경우</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">6. 개인정보 처리의 위탁</h2>
              <p>회사는 서비스 이행을 위해 아래와 같이 개인정보 처리 업무를 위탁하고 있습니다.</p>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 pr-4 font-semibold text-gray-800">수탁업체</th>
                      <th className="text-left py-3 font-semibold text-gray-800">위탁 업무</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">클라우드 서비스 제공업체</td>
                      <td className="py-3">데이터 저장 및 서버 운영</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">AI 서비스 제공업체</td>
                      <td className="py-3">AI 동화 생성, 삽화 생성, TTS 서비스</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">결제 대행사</td>
                      <td className="py-3">결제 처리 및 환불</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">7. 정보주체의 권리·의무 및 행사 방법</h2>
              <p>정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>개인정보 열람 요구</li>
                <li>오류 등이 있을 경우 정정 요구</li>
                <li>삭제 요구</li>
                <li>처리 정지 요구</li>
              </ul>
              <p className="mt-3">
                위 권리 행사는 서비스 내 설정 메뉴 또는 이메일(support@kidstory.app)을 통해 하실 수 있으며, 회사는 이에 대해 지체 없이 조치하겠습니다.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">8. 개인정보의 파기</h2>
              <p>
                회사는 개인정보 보유 기간의 경과, 처리 목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>전자적 파일 형태: 복구 및 재생이 불가능한 방법으로 영구 삭제</li>
                <li>아동의 프로필 사진: 회원 탈퇴 또는 아동 프로필 삭제 시 즉시 파기</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">9. 개인정보의 안전성 확보 조치</h2>
              <p>회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>관리적 조치: 내부 관리 계획 수립·시행, 개인정보 취급 직원의 최소화 및 교육</li>
                <li>기술적 조치: 개인정보 암호화, 해킹 등에 대비한 보안 시스템 설치, 접근 권한 관리</li>
                <li>물리적 조치: 전산실, 자료 보관실 등의 접근 통제</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">10. 쿠키의 사용</h2>
              <p>
                회사는 이용자에게 개별적인 맞춤 서비스를 제공하기 위해 쿠키(cookie)를 사용합니다. 이용자는 웹 브라우저 설정을 통해 쿠키의 설치를 거부할 수 있으나, 이 경우 서비스 이용에 어려움이 있을 수 있습니다.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">11. 개인정보 보호 책임자</h2>
              <p>
                회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만 처리 및 피해 구제 등을 위하여 아래와 같이 개인정보 보호 책임자를 지정하고 있습니다.
              </p>
              <div className="mt-3 bg-gray-50 rounded-xl p-5">
                <p className="font-semibold text-gray-800 mb-2">개인정보 보호 책임자</p>
                <ul className="space-y-1 text-sm">
                  <li>담당부서: 개인정보보호팀</li>
                  <li>이메일: privacy@kidstory.app</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">12. 권익 침해 구제 방법</h2>
              <p>정보주체는 아래의 기관에 대해 개인정보 침해에 대한 피해 구제, 상담 등을 문의할 수 있습니다.</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>개인정보침해신고센터 (한국인터넷진흥원): privacy.kisa.or.kr / 국번없이 118</li>
                <li>개인정보분쟁조정위원회: kopico.go.kr / 국번없이 1833-6972</li>
                <li>대검찰청 사이버수사과: spo.go.kr / 국번없이 1301</li>
                <li>경찰청 사이버수사국: ecrm.police.go.kr / 국번없이 182</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">13. 개인정보처리방침 변경</h2>
              <p>
                이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경 내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white py-8">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <p className="text-sm text-gray-400">&copy; 2024 KidStory. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
