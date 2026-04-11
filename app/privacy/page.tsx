import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Temp Contacts protects your privacy and handles your data.",
  alternates: {
    canonical: "https://www.tempcontacts.space/privacy",
  },
}

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-muted-foreground">
            Last updated: March 19, 2026
          </p>

          <div className="mt-12 space-y-12">
            <section>
              <h2 className="text-xl font-semibold text-foreground">
                1. Introduction
              </h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>
                  Welcome to TempContacts {"("}&quot;we,&quot; &quot;our,&quot; or
                  &quot;us&quot;{")"}. We are committed to protecting your privacy
                  and ensuring you have a positive experience when using our
                  mobile application.
                </p>
                <p>
                  This Privacy Policy explains how we collect, use, disclose,
                  and safeguard your information when you use our TempContacts
                  mobile application.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                2. Information We Collect
              </h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <h3 className="font-medium text-foreground">
                  2.1 Information You Provide
                </h3>
                <ul className="ml-6 list-disc space-y-2">
                  <li>
                    <strong>Account Information:</strong> When you sign in with
                    Google, we receive your name, email address, and profile
                    picture.
                  </li>
                  <li>
                    <strong>Contact Data:</strong> The temporary contacts you
                    create, including names, phone numbers, notes, and
                    expiration dates.
                  </li>
                </ul>

                <h3 className="font-medium text-foreground">
                  2.2 Automatically Collected Information
                </h3>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Device type and operating system</li>
                  <li>App usage statistics and crash reports</li>
                  <li>Anonymous analytics data to improve our service</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                3. How We Use Your Information
              </h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>We use the information we collect to:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Provide and maintain our service</li>
                  <li>
                    Sync your temporary contacts across devices when signed in
                  </li>
                  <li>Automatically delete expired contacts</li>
                  <li>Improve and optimize our application</li>
                  <li>Respond to your comments, questions, and requests</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                4. Guest Mode
              </h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>
                  When using TempContacts in guest mode, all your data is stored
                  locally on your device. We do not collect, transmit, or store
                  any of your contact information on our servers.
                </p>
                <p>
                  Please note that guest mode data is not backed up and will be
                  lost if you uninstall the app or clear app data.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                5. Data Sharing and Disclosure
              </h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>
                  <strong>We do not sell your personal information.</strong> We
                  may share your information only in the following situations:
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>With your consent</li>
                  <li>To comply with legal obligations</li>
                  <li>
                    With service providers who assist us in operating our
                    application {"("}subject to confidentiality agreements{")"}
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                6. Data Security
              </h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>
                  We implement appropriate technical and organizational measures
                  to protect your personal information, including:
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Secure authentication via Google OAuth</li>
                  <li>Regular security assessments</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                7. Data Retention
              </h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>
                  We retain your account information for as long as your account
                  is active. Temporary contacts are automatically deleted based
                  on their expiration dates.
                </p>
                <p>
                  You can request deletion of your account and all associated
                  data at any time by contacting us.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                8. Your Rights
              </h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>Depending on your location, you may have the right to:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Export your data in a portable format</li>
                  <li>Opt out of analytics collection</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                9. Children&apos;s Privacy
              </h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>
                  Our service is not intended for children under 13 years of
                  age. We do not knowingly collect personal information from
                  children under 13.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                10. Changes to This Policy
              </h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page and updating the &quot;Last updated&quot; date.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                11. Contact Us
              </h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>
                  If you have any questions about this Privacy Policy, please
                  contact us at:
                </p>
                <p className="font-medium text-foreground">
                  privacy@tempcontacts.app
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
