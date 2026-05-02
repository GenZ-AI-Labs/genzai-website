import { Seo } from "@/components/Seo";
import { Sparkles } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Privacy Policy — Stroke InsightZ Mobile"
        description="Privacy Policy for the Stroke InsightZ Mobile app published by GENZ AI LABS PRIVATE LIMITED. Information we collect, how we use it, and your rights."
        path="/privacy-policy"
      />

      {/* Hero */}
      <section className="relative bg-slate-50 border-b border-slate-200 py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-blue-200/30 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-cyan-200/30 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-semibold tracking-[0.18em] uppercase mb-4">
            <Sparkles className="h-3 w-3" />
            Legal
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Privacy Policy
          </h1>
          <p className="text-lg text-slate-600 mt-4">
            Stroke InsightZ Mobile App
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2 text-xs">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold">
              Effective: 28 April 2026
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold">
              Last updated: 2 May 2026
            </span>
          </div>
        </div>
      </section>

      {/* Document */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-slate-700">
        {/* Front matter */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8 mb-12">
          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div>
              <dt className="font-semibold text-slate-900 mb-1">Data Controller</dt>
              <dd className="text-slate-700">GENZ AI LABS PRIVATE LIMITED, Pune, Maharashtra, India</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900 mb-1">Contact</dt>
              <dd>
                <a
                  href="mailto:developer.genzailabs@gmail.com"
                  className="text-blue-600 hover:text-blue-700 underline break-all"
                >
                  developer.genzailabs@gmail.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900 mb-1">Package</dt>
              <dd>
                <code className="bg-white border border-slate-200 px-2 py-0.5 rounded text-xs font-mono text-slate-800">
                  com.genzailabs.perfusion
                </code>
              </dd>
            </div>
          </dl>
        </div>

        {/* 1. About this app */}
        <Section number="1" title="About this app">
          <p>
            Stroke InsightZ Mobile (&quot;the app&quot;, package name{" "}
            <Code>com.genzailabs.perfusion</Code>) is a read-only mobile companion to
            the Stroke InsightZ cerebral perfusion analysis platform operated by Genz
            AI Labs (
            <ExtLink href="https://perfusion.genzailabs.com">
              https://perfusion.genzailabs.com
            </ExtLink>
            ). The app is intended for use by healthcare professionals — radiologists,
            neurologists, and stroke clinicians — to view AI-generated perfusion
            analysis reports for their patient cases.
          </p>
          <p>
            <strong className="font-semibold text-slate-900">
              The app does not perform any AI analysis on your device.
            </strong>{" "}
            All analysis is performed on Genz AI Labs&apos; secure cloud servers; the
            mobile app is purely a viewer for already-computed results. The app is
            not a medical device. It does not provide diagnostic decisions and is not
            a substitute for clinical judgement.
          </p>
        </Section>

        {/* 2. Information we collect */}
        <Section number="2" title="Information we collect">
          <SubHeading>2.1 Information you provide directly</SubHeading>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong className="font-semibold text-slate-900">Account credentials</strong>{" "}
              — your username and password, which you enter to log into your existing
              Stroke InsightZ account. The username may be an email address. These
              are transmitted over HTTPS to our authentication server (
              <Code>perfusion.genzailabs.com</Code>) and are not stored on our servers
              in plaintext.
            </li>
          </ul>

          <SubHeading>2.2 Information stored on your device</SubHeading>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong className="font-semibold text-slate-900">
                Authentication token
              </strong>{" "}
              — after a successful login, a server-issued opaque token is stored
              locally in Android&apos;s encrypted secure storage (
              <Code>flutter_secure_storage</Code>). The token is used only to
              authenticate further requests to our API, and is deleted when you sign
              out.
            </li>
            <li>
              <strong className="font-semibold text-slate-900">Remembered username</strong>{" "}
              (optional) — if you tick &quot;Remember me&quot; at login, your username
              is stored locally in <Code>SharedPreferences</Code> so it can be
              auto-filled next time.
            </li>
            <li>
              <strong className="font-semibold text-slate-900">Cached PDF reports</strong>{" "}
              — when you tap a case, the app downloads the corresponding PDF report
              into the app&apos;s private cache directory. If you tap &quot;Save to
              Downloads&quot;, a copy is also saved to{" "}
              <Code>/Downloads/StrokeInsightZ/</Code> on your device for offline
              access.
            </li>
          </ul>

          <SubHeading>2.3 Push notification token (Firebase Cloud Messaging)</SubHeading>
          <p>
            To deliver push notifications to your device when a new case is uploaded
            or a perfusion report becomes ready, the app uses Google&apos;s Firebase
            Cloud Messaging (FCM) service:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong className="font-semibold text-slate-900">Device push token</strong>{" "}
              — when you log in, the app obtains a unique device-specific FCM
              registration token from Google&apos;s servers and transmits it (over
              HTTPS) to our authentication server (
              <Code>perfusion.genzailabs.com</Code>). The token is stored on our
              backend against your user account so we can route notifications to
              your device(s) only. Multiple device tokens per account are supported
              (e.g., your phone + tablet).
            </li>
            <li>
              <strong className="font-semibold text-slate-900">
                What FCM is NOT used for
              </strong>{" "}
              — we do not use FCM for analytics, advertising, behavioural targeting,
              location tracking, or sharing data with any third party other than
              Google&apos;s delivery infrastructure as required to send the
              notification. The notification payload contains only the patient
              identifier and case status — the same information already visible to
              you in the app.
            </li>
            <li>
              <strong className="font-semibold text-slate-900">Permission</strong> —
              Android 13 and above requires you to explicitly grant notification
              permission the first time the app runs. If you decline, the app
              continues to work normally; you simply won&apos;t receive push alerts
              for new cases.
            </li>
            <li>
              <strong className="font-semibold text-slate-900">
                Disabling notifications
              </strong>{" "}
              — you can disable notifications at any time via Android Settings →
              Apps → Stroke InsightZ → Notifications. Logging out also removes the
              token from our servers.
            </li>
          </ul>
          <p>
            Google&apos;s processing of the FCM token is governed by Google&apos;s
            own privacy policy (
            <ExtLink href="https://policies.google.com/privacy">
              policies.google.com/privacy
            </ExtLink>
            ) and Firebase data processing terms (
            <ExtLink href="https://firebase.google.com/support/privacy">
              firebase.google.com/support/privacy
            </ExtLink>
            ).
          </p>

          <SubHeading>2.4 Information we do NOT collect</SubHeading>
          <p>The mobile app does not collect, transmit or store:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Your name, address, phone number, or other contact details</li>
            <li>Your location (GPS, Wi-Fi, or otherwise)</li>
            <li>
              Android ID, advertising ID (we do not request, read, or use the
              Android Advertising ID), or hardware identifiers like IMEI
            </li>
            <li>Crash logs, analytics, telemetry or usage statistics</li>
            <li>Your contacts, calendar, photos, audio or messages</li>
            <li>
              Any health data about you personally — the patient case data you view
              in the app belongs to your clinical workspace on the Stroke InsightZ
              cloud platform; the mobile app fetches and displays it on demand and
              does not retain it beyond your active session
            </li>
          </ul>
          <p>
            The only &quot;device identifier&quot; the app handles is the Firebase
            Cloud Messaging registration token described in section 2.3, used solely
            to deliver push notifications to your device.
          </p>
          <p>
            We do not use third-party advertising networks, analytics SDKs, or
            tracking libraries.
          </p>
        </Section>

        {/* 3. How we use information */}
        <Section number="3" title="How we use information">
          <p>We use the limited information described above only to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Authenticate you against your existing Stroke InsightZ account</li>
            <li>
              Display the cases, metrics, findings and PDF reports that belong to
              your account
            </li>
            <li>
              Allow you to download reports to your device and share them with
              colleagues via WhatsApp or email (using your device&apos;s native
              sharing — we do not send anything on your behalf)
            </li>
          </ul>
          <p>
            We do not use your information for advertising, profiling, behavioural
            targeting, or AI model training.
          </p>
        </Section>

        {/* 4. Sharing with third parties */}
        <Section number="4" title="Sharing with third parties">
          <p>
            We do not share, sell or rent your information to any third party for
            marketing, analytics, advertising, or behavioural-targeting purposes.
          </p>
          <p>The app communicates with two destinations:</p>
          <ol className="list-decimal pl-6 mb-4 space-y-3">
            <li>
              <strong className="font-semibold text-slate-900">
                Genz AI Labs servers
              </strong>{" "}
              at <Code>perfusion.genzailabs.com</Code> (HTTPS/TLS encrypted) — for
              authentication, case retrieval, and PDF download. This is our own
              infrastructure.
            </li>
            <li>
              <strong className="font-semibold text-slate-900">
                Google&apos;s Firebase Cloud Messaging service
              </strong>{" "}
              — solely to deliver push notifications to your device. Google receives
              the encrypted notification payload (containing only the patient
              identifier and case status) and the FCM device token; Google processes
              this strictly as a transit/delivery service under their Firebase data
              processing terms.
            </li>
          </ol>
          <p>
            When you choose to share a PDF via WhatsApp or email, the file is handed
            to the destination app on your device through Android&apos;s standard
            sharing intent. From that point onwards the destination app&apos;s own
            privacy policy applies — Genz AI Labs has no visibility into or control
            over what those apps do with the file.
          </p>
        </Section>

        {/* 5. Data security */}
        <Section number="5" title="Data security">
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              All network traffic between the app and our servers is encrypted in
              transit using HTTPS (TLS).
            </li>
            <li>
              Authentication tokens are stored on your device using Android&apos;s{" "}
              <Code>EncryptedSharedPreferences</Code> and the Android Keystore.
            </li>
            <li>Your password is never stored on the device after login.</li>
            <li>
              Patient case data is fetched on demand from your authenticated session
              and is not persisted in a local database.
            </li>
          </ul>
          <p>
            No system can be guaranteed 100% secure. If you suspect unauthorised
            access to your account, please change your password on{" "}
            <ExtLink href="https://perfusion.genzailabs.com">
              perfusion.genzailabs.com
            </ExtLink>{" "}
            and contact us immediately.
          </p>
        </Section>

        {/* 6. Data retention */}
        <Section number="6" title="Data retention">
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              Authentication tokens are retained on your device until you sign out,
              after which they are deleted.
            </li>
            <li>
              Cached PDFs in the app&apos;s private cache directory may be cleared by
              Android when storage is low, or by you via Settings → Apps → Stroke
              InsightZ → Clear cache.
            </li>
            <li>
              PDFs you saved to <Code>/Downloads/StrokeInsightZ/</Code> remain on
              your device until you delete them manually.
            </li>
            <li>
              Patient case data viewed in the app is governed by the data retention
              policies of your Stroke InsightZ cloud platform account and is not
              retained by the mobile app itself.
            </li>
          </ul>
        </Section>

        {/* 7. Your rights */}
        <Section number="7" title="Your rights">
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong className="font-semibold text-slate-900">Access</strong> the
              personal data we hold about you
            </li>
            <li>
              <strong className="font-semibold text-slate-900">Correct</strong> any
              inaccurate data
            </li>
            <li>
              <strong className="font-semibold text-slate-900">Delete</strong> your
              account and all associated data
            </li>
            <li>
              <strong className="font-semibold text-slate-900">
                Withdraw consent
              </strong>{" "}
              to data processing
            </li>
            <li>
              <strong className="font-semibold text-slate-900">
                Lodge a complaint
              </strong>{" "}
              with a data protection authority
            </li>
          </ul>
          <p>
            To exercise any of these rights, email{" "}
            <a
              href="mailto:developer.genzailabs@gmail.com?subject=Privacy%20request%20%E2%80%94%20Stroke%20InsightZ%20Mobile"
              className="text-blue-600 hover:text-blue-700 font-semibold underline"
            >
              developer.genzailabs@gmail.com
            </a>{" "}
            with the subject line &quot;Privacy request — Stroke InsightZ
            Mobile&quot;. We will respond within 30 days.
          </p>
          <p>
            To delete your account and all associated data, please email{" "}
            <a
              href="mailto:developer.genzailabs@gmail.com"
              className="text-blue-600 hover:text-blue-700 underline"
            >
              developer.genzailabs@gmail.com
            </a>{" "}
            from the address you registered with, or contact your Stroke InsightZ
            administrator. Account deletion removes your login, your case history and
            any cloud-stored PDFs from our systems.
          </p>
        </Section>

        {/* 8. Children's privacy */}
        <Section number="8" title="Children's privacy">
          <p>
            Stroke InsightZ Mobile is a clinical tool intended exclusively for adult
            healthcare professionals. The app is not directed at children under 18,
            and we do not knowingly collect information from anyone under 18. If you
            believe a minor has accessed the app, please contact us at{" "}
            <a
              href="mailto:developer.genzailabs@gmail.com"
              className="text-blue-600 hover:text-blue-700 underline"
            >
              developer.genzailabs@gmail.com
            </a>
            .
          </p>
        </Section>

        {/* 9. International data transfers */}
        <Section number="9" title="International data transfers">
          <p>
            Genz AI Labs&apos; servers are located in India. By using the app, you
            consent to your information being processed in India under Indian data
            protection law. Where personal data is transferred from outside India, we
            apply equivalent safeguards.
          </p>
        </Section>

        {/* 10. Changes */}
        <Section number="10" title="Changes to this policy">
          <p>
            We may update this Privacy Policy from time to time. The &quot;Last
            updated&quot; date at the top of this policy will reflect any change.
            Material changes will be notified through the app or via email to your
            registered address. Continued use of the app after a change constitutes
            acceptance of the updated policy.
          </p>
        </Section>

        {/* 11. Contact */}
        <Section number="11" title="Contact us">
          <p>
            For any questions about this Privacy Policy or our data practices:
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mt-4">
            <p className="font-semibold text-slate-900 mb-2">
              Genz AI Labs Private Limited
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              S. No. 159/1/2, Surbhi Heights Fl. No. 602
              <br />
              Masulkar Colony, Pune – 411018
              <br />
              Maharashtra, India
            </p>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div>
                <dt className="font-semibold text-slate-900 mb-0.5">Email</dt>
                <dd>
                  <a
                    href="mailto:developer.genzailabs@gmail.com"
                    className="text-blue-600 hover:text-blue-700 underline break-all"
                  >
                    developer.genzailabs@gmail.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900 mb-0.5">Website</dt>
                <dd>
                  <ExtLink href="https://www.genzailabs.com/">
                    www.genzailabs.com
                  </ExtLink>
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="font-semibold text-slate-900 mb-0.5">Platform</dt>
                <dd>
                  <ExtLink href="https://perfusion.genzailabs.com/">
                    perfusion.genzailabs.com
                  </ExtLink>
                </dd>
              </div>
            </dl>
          </div>
        </Section>
      </article>
    </div>
  );
};

const Section = ({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section className="mb-12">
    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight">
      <span className="text-blue-600 font-mono mr-2">{number}.</span>
      {title}
    </h2>
    <div className="space-y-4 leading-relaxed">{children}</div>
  </section>
);

const SubHeading = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-lg md:text-xl font-semibold text-slate-900 mt-6 mb-3">
    {children}
  </h3>
);

const Code = ({ children }: { children: React.ReactNode }) => (
  <code className="bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded text-[0.85em] font-mono text-slate-800">
    {children}
  </code>
);

const ExtLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:text-blue-700 underline break-all"
  >
    {children}
  </a>
);

export default PrivacyPolicy;
