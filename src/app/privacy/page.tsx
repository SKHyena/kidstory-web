import { LegalPage } from "@/components/legal-page";

export const metadata = {
  title: "개인정보처리방침 - KidStory",
  description: "KidStory 개인정보처리방침",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="개인정보처리방침"
      effectiveDate="[시행일: YYYY년 MM월 DD일]"
      updatedDate="[최종 수정일: YYYY년 MM월 DD일]"
      current="/privacy"
    >
      <section>
        <p>
          [사업자명](이하 &quot;회사&quot;)은(는) 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를
          보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이
          개인정보처리방침을 수립·공개합니다. 회사가 운영하는 AI 동화책 서비스 &quot;KidStory&quot;(이하
          &quot;서비스&quot;)는 만 14세 미만 아동을 대상으로 한 콘텐츠를 포함하므로, 아동의 개인정보 보호에
          특별한 주의를 기울입니다.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-gray-900 mb-3">1. 개인정보의 처리 목적</h2>
        <p>
          회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하는 개인정보는 다음의 목적 이외의
          용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의
          동의를 받는 등 필요한 조치를 이행합니다.
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>회원 가입 및 관리: 소셜 로그인을 통한 본인 확인·식별, 가입 의사 확인, 회원자격 유지·관리, 서비스 부정이용 방지</li>
          <li>서비스 제공: 자녀 프로필 기반 AI 동화 생성, AI 삽화 생성, 음성 읽어주기(TTS) 제공, 동화 라이브러리 관리</li>
          <li>알림 제공: 동화 생성 완료 등 서비스 이용에 필요한 푸시 알림(FCM) 발송</li>
          <li>서비스 개선: 서비스 이용 통계 분석, 품질 향상, 신규 서비스 개발</li>
          <li>고객 지원: 문의 접수 및 처리, 공지사항 등 필수 안내사항 전달</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-bold text-gray-900 mb-3">2. 수집하는 개인정보의 항목 및 수집 방법</h2>
        <div className="mt-2 space-y-4">
          <div>
            <h3 className="font-semibold text-gray-800">가. 회원(법정대리인) 정보</h3>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>소셜 로그인(카카오, 구글) 연동 시: 소셜 계정 고유 식별자, 이메일 주소, 닉네임(프로필 이름), 프로필 이미지(제공에 동의한 경우)</li>
              <li>서비스 알림을 위한 기기 푸시 토큰(FCM Registration Token)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">나. 자녀(동화 주인공) 정보</h3>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>필수: 자녀 이름(또는 애칭), 나이(또는 생년), 성별</li>
              <li>선택: 자녀 사진(AI 삽화 생성용), 관심사·선호 동화 주제</li>
            </ul>
            <p className="mt-2 text-sm text-gray-500">
              ※ 자녀가 만 14세 미만인 경우, 위 정보는 법정대리인의 동의를 받아 법정대리인이 직접 입력·제공합니다(본 방침 제4조 참조).
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">다. 서비스 이용 과정에서 자동 생성·수집되는 정보</h3>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>기기 정보(OS 종류 및 버전, 기기 모델, 앱 버전), 서비스 이용 기록, 접속 로그, IP 주소</li>
            </ul>
          </div>
        </div>
        <p className="mt-3">
          <span className="font-semibold text-gray-800">수집 방법:</span> 소셜 로그인 인증, 서비스 내
          자녀 온보딩 및 동화 생성 과정에서의 이용자 직접 입력, 서비스 이용 중 자동 생성.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-gray-900 mb-3">3. 개인정보의 처리 및 보유 기간</h2>
        <p>
          회사는 법령에 따른 개인정보 보유·이용 기간 또는 정보주체로부터 개인정보 수집 시에 동의받은
          보유·이용 기간 내에서 개인정보를 처리·보유합니다.
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>회원 정보 및 자녀 정보: 회원 탈퇴 시까지 (탈퇴 후 지체 없이 파기, 늦어도 [__]일 이내)</li>
          <li>자녀 사진 및 생성된 동화 데이터: 회원 탈퇴 또는 이용자의 자녀 프로필·동화 삭제 시까지</li>
          <li>서비스 이용 기록(접속 로그, IP 주소): 3개월 (통신비밀보호법)</li>
          <li>기타 관계 법령이 정한 기간이 있는 경우 해당 기간</li>
        </ul>
        <p className="mt-3 text-sm text-gray-500">
          ※ 보유 기간 및 파기 기한의 구체적 일수는 [내부 정책에 따라 확정하여 기재] 바랍니다.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-gray-900 mb-3">4. 만 14세 미만 아동의 개인정보 처리</h2>
        <p>
          회사는 만 14세 미만 아동의 개인정보를 처리하기 위하여 「개인정보 보호법」 제22조의2에 따라
          법정대리인의 동의를 받으며, 아동의 개인정보 보호를 위해 다음 사항을 준수합니다.
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>만 14세 미만 아동의 자녀 프로필 등록 등 개인정보 수집 시, 법정대리인의 동의를 받은 후에만 이를 수집·이용합니다.</li>
          <li>법정대리인의 동의를 받기 위하여 아동으로부터 법정대리인의 성명·연락처 등 최소한의 정보를 수집할 수 있으며, 해당 정보는 동의 확인 목적으로만 이용합니다.</li>
          <li>법정대리인의 동의 없이 수집된 아동의 개인정보가 확인될 경우 지체 없이 파기합니다.</li>
          <li>수집된 아동의 개인정보(사진 포함)는 AI 동화·삽화 생성 및 맞춤 콘텐츠 제공 목적으로만 이용되며, 마케팅 목적으로 이용하거나 제3자에게 별도로 제공하지 않습니다.</li>
          <li>법정대리인은 언제든지 아동의 개인정보에 대한 열람, 정정, 삭제 및 처리정지를 요구할 수 있으며, 회사는 지체 없이 조치합니다.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-bold text-gray-900 mb-3">5. 개인정보의 제3자 제공</h2>
        <p>
          회사는 정보주체의 개인정보를 본 방침 제1조에서 명시한 범위 내에서만 처리하며, 정보주체의 동의,
          법률의 특별한 규정 등 「개인정보 보호법」 제17조 및 제18조에 해당하는 경우에만 개인정보를
          제3자에게 제공합니다. 회사는 현재 정보주체의 개인정보를 제3자에게 제공하고 있지 않습니다. (해당
          사항 발생 시 제공받는 자·목적·항목·보유기간을 사전에 고지하고 동의를 받습니다.)
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-gray-900 mb-3">6. 개인정보 처리업무의 위탁</h2>
        <p>회사는 원활한 서비스 제공을 위하여 아래와 같이 개인정보 처리업무를 위탁하고 있습니다.</p>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 pr-4 font-semibold text-gray-800">수탁자</th>
                <th className="text-left py-3 font-semibold text-gray-800">위탁 업무 내용</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4">Amazon Web Services, Inc. (AWS)</td>
                <td className="py-3">이미지·데이터 저장(S3) 및 클라우드 서버 인프라 운영</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4">Google LLC</td>
                <td className="py-3">구글 소셜 로그인 인증, AI 동화·삽화 생성(Gemini API)</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4">Google LLC (Firebase)</td>
                <td className="py-3">푸시 알림 발송(Firebase Cloud Messaging)</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4">주식회사 카카오</td>
                <td className="py-3">카카오 소셜 로그인 인증</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4">[TTS 음성 서비스 제공업체]</td>
                <td className="py-3">동화 음성 읽어주기(TTS) 음성 생성</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3">
          회사는 위탁계약 체결 시 「개인정보 보호법」 제26조에 따라 위탁업무 수행 목적 외 개인정보 처리
          금지, 기술적·관리적 보호조치, 재위탁 제한 등을 계약서에 명시하고 수탁자가 개인정보를 안전하게
          처리하는지 감독합니다.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-gray-900 mb-3">7. 개인정보의 국외 이전</h2>
        <p>
          회사는 서비스 제공을 위해 아래와 같이 개인정보가 국외의 수탁자에게 이전(처리위탁)될 수 있습니다.
          이용자는 서비스 이용(소셜 로그인, AI 동화 생성 등)을 통해 아래 국외 이전에 동의한 것으로 봅니다.
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>이전받는 자: AWS, Google LLC 등 본 방침 제6조에 기재된 국외 수탁자</li>
          <li>이전 항목: 소셜 계정 식별자·이메일·닉네임, 자녀 프로필 정보 및 사진, 생성된 동화 데이터</li>
          <li>이전 국가·일시·방법: 각 수탁자가 운영하는 국외 리전 서버, 서비스 이용 시점에 정보통신망을 통해 이전</li>
          <li>이용 목적 및 보유 기간: 본 방침 제1조 및 제3조와 동일</li>
        </ul>
        <p className="mt-3 text-sm text-gray-500">
          ※ 각 수탁자가 사용하는 실제 데이터센터 리전([예: AWS ap-northeast-2 등])을 확인하여 구체적으로
          기재하시기 바랍니다.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-gray-900 mb-3">8. 정보주체와 법정대리인의 권리·의무 및 행사 방법</h2>
        <p>
          정보주체(만 14세 미만 아동의 경우 그 법정대리인)는 회사에 대해 언제든지 다음의 개인정보 보호
          관련 권리를 행사할 수 있습니다.
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>개인정보 열람 요구</li>
          <li>오류 등이 있을 경우 정정 요구</li>
          <li>삭제 요구</li>
          <li>처리정지 요구 및 동의 철회</li>
        </ul>
        <p className="mt-3">
          권리 행사는 서비스 내 설정 메뉴, 또는 개인정보 보호책임자에게 서면·이메일([개인정보 보호책임자
          이메일])로 요청하실 수 있으며, 회사는 이에 대해 지체 없이 조치합니다. 정보주체가 개인정보의
          오류에 대한 정정을 요청한 경우, 회사는 정정을 완료할 때까지 해당 개인정보를 이용·제공하지
          않습니다.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-gray-900 mb-3">9. 개인정보의 파기 절차 및 방법</h2>
        <p>
          회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이
          해당 개인정보를 파기합니다.
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>파기 절차: 파기 사유가 발생한 개인정보를 선정하고, 개인정보 보호책임자의 확인을 받아 파기합니다.</li>
          <li>전자적 파일 형태의 정보: 복구 및 재생이 불가능한 기술적 방법으로 영구 삭제</li>
          <li>자녀 사진 및 생성 동화: 회원 탈퇴 또는 해당 프로필·동화 삭제 시 저장소(S3 등)에서 즉시 삭제</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-bold text-gray-900 mb-3">10. 개인정보의 안전성 확보 조치</h2>
        <p>회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>관리적 조치: 내부관리계획 수립·시행, 개인정보 취급자 최소화 및 정기 교육</li>
          <li>기술적 조치: 개인정보 처리시스템 접근권한 관리, 접속기록 보관, 인증 토큰(JWT) 기반 인증, 전송구간 암호화(HTTPS/TLS)</li>
          <li>물리적 조치: 클라우드 인프라 접근 통제 및 로깅</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-bold text-gray-900 mb-3">11. 쿠키 등 자동 수집장치의 설치·운영 및 거부</h2>
        <p>
          회사는 서비스 이용 과정에서 맞춤형 서비스 제공을 위해 쿠키 또는 이와 유사한 기술을 사용할 수
          있습니다. 이용자는 웹 브라우저 또는 기기 설정을 통해 쿠키 및 광고 식별자 등의 수집을 거부할 수
          있으나, 이 경우 일부 서비스 이용에 제한이 있을 수 있습니다.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-gray-900 mb-3">12. 개인정보 보호책임자</h2>
        <p>
          회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만
          처리 및 피해 구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
        </p>
        <div className="mt-3 bg-gray-50 rounded-xl p-5">
          <p className="font-semibold text-gray-800 mb-2">개인정보 보호책임자</p>
          <ul className="space-y-1 text-sm">
            <li>성명: [개인정보 보호책임자 성명]</li>
            <li>직책: [직책]</li>
            <li>연락처: [전화번호]</li>
            <li>이메일: [개인정보 보호책임자 이메일]</li>
          </ul>
        </div>
        <p className="mt-3">
          정보주체는 서비스 이용 중 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등을 개인정보
          보호책임자에게 문의할 수 있으며, 회사는 지체 없이 답변 및 처리합니다.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-gray-900 mb-3">13. 권익침해 구제 방법</h2>
        <p>정보주체는 아래의 기관에 개인정보 침해에 대한 피해 구제, 상담 등을 문의할 수 있습니다.</p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>개인정보침해신고센터(한국인터넷진흥원): privacy.kisa.or.kr / 국번없이 118</li>
          <li>개인정보 분쟁조정위원회: kopico.go.kr / 1833-6972</li>
          <li>대검찰청 사이버수사과: spo.go.kr / 국번없이 1301</li>
          <li>경찰청 사이버수사국: ecrm.police.go.kr / 국번없이 182</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-bold text-gray-900 mb-3">14. 개인정보처리방침의 변경</h2>
        <p>
          이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경 내용의 추가, 삭제 및 정정이
          있는 경우에는 변경사항의 시행 7일 전부터 서비스 내 공지사항을 통하여 고지합니다. 다만, 이용자
          권리의 중요한 변경이 있는 경우에는 최소 30일 전에 고지합니다.
        </p>
      </section>
    </LegalPage>
  );
}
