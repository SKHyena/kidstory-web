import { LegalPage } from "@/components/legal-page";

export const metadata = {
  title: "계정 및 데이터 삭제 안내 - KidStory",
  description:
    "KidStory 계정 삭제 절차와 삭제되는 데이터 항목, 이메일을 통한 삭제 요청 방법을 안내합니다.",
};

export default function AccountDeletionPage() {
  return (
    <LegalPage title="계정 및 데이터 삭제 안내" current="/account-deletion">
      <section>
        <p>
          KidStory는 이용자가 언제든지 계정과 계정에 연결된 모든 데이터를 삭제할 수 있도록 하고
          있습니다. 앱 내에서 직접 탈퇴하거나, 앱을 사용할 수 없는 경우 이메일로 삭제를 요청하실 수
          있습니다.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-gray-900 mb-3">1. 앱에서 직접 삭제하는 방법</h2>
        <ol className="list-decimal pl-6 space-y-1">
          <li>KidStory 앱을 실행하고 로그인합니다.</li>
          <li>하단 탭에서 [설정] 화면으로 이동합니다.</li>
          <li>[회원 탈퇴]를 선택합니다.</li>
          <li>안내되는 확인 창에서 탈퇴를 확정합니다.</li>
        </ol>
        <p className="mt-3">
          탈퇴가 완료되면 계정과 아래의 모든 데이터가 서버에서 즉시 삭제되며, 이 작업은 되돌릴 수
          없습니다.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-gray-900 mb-3">2. 이메일로 삭제를 요청하는 방법</h2>
        <p>
          앱에 접근할 수 없거나 로그인이 어려운 경우, 아래 이메일로 삭제를 요청해 주시기 바랍니다.
        </p>
        <div className="mt-3 bg-gray-50 rounded-xl p-5">
          <ul className="space-y-1 text-sm">
            <li>수신 이메일: skhyena728@gmail.com</li>
            <li>제목: [KidStory] 계정 삭제 요청</li>
            <li>본문 기재 사항: 가입에 사용하신 소셜 로그인 종류(카카오, 구글 또는 Apple)와 이메일 주소</li>
          </ul>
        </div>
        <p className="mt-3">
          본인 확인 절차를 거친 후 지체 없이 처리하며, 접수일로부터 영업일 기준 3일 이내에 처리 결과를
          회신합니다.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-gray-900 mb-3">3. 삭제되는 데이터</h2>
        <p>계정 삭제 시 다음 데이터가 서버 및 저장소에서 모두 삭제됩니다.</p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>회원 정보: 소셜 계정 식별자, 이메일, 닉네임, 프로필 이미지</li>
          <li>자녀 프로필: 이름, 생년월일, 성별, 등록하신 사진</li>
          <li>생성된 동화 데이터: 동화 텍스트, 삽화 이미지, 낭독 음성 파일</li>
          <li>이용권 구매 및 크레딧 내역</li>
          <li>인증 토큰 및 푸시 알림 발송을 위한 기기 토큰</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-bold text-gray-900 mb-3">4. 보관되는 데이터</h2>
        <p>
          관계 법령에 따라 보관 의무가 있는 정보는 해당 법령이 정한 기간 동안 분리 보관된 후
          파기됩니다.
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>서비스 이용 기록, 접속 로그 및 IP 주소: 3개월 (통신비밀보호법)</li>
          <li>
            대금 결제 및 재화 등의 공급에 관한 기록: 5년 (전자상거래 등에서의 소비자보호에 관한 법률)
          </li>
          <li>소비자의 불만 또는 분쟁 처리에 관한 기록: 3년 (동법)</li>
        </ul>
        <p className="mt-3">
          그 밖의 자세한 사항은 <a href="/privacy" className="underline">개인정보처리방침</a>을 참고해
          주시기 바랍니다.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-gray-900 mb-3">5. 문의</h2>
        <p>
          계정 삭제와 관련하여 궁금한 점이 있으시면 개인정보 보호책임자(김기손,
          skhyena728@gmail.com)에게 문의해 주시기 바랍니다.
        </p>
      </section>
    </LegalPage>
  );
}
