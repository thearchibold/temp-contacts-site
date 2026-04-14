import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { UseCasesSection } from "@/components/use-cases-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { FAQSection, faqs } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { ANDROID_IN_PRODUCTION, ANDROID_URLS } from "@/lib/config"

const siteUrl = "https://www.tempcontacts.space"
const iosUrl = "https://apps.apple.com/gh/app/temp-contacts/id6760283830"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <UseCasesSection />
        <HowItWorksSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />

      {/* Organization schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Temp Contacts",
            url: siteUrl,
            logo: `${siteUrl}/icon-64x64.png`,
          }),
        }}
      />

      {/* SoftwareApplication schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Temp Contacts",
            operatingSystem: "iOS, Android",
            applicationCategory: "UtilitiesApplication",
            description:
              "Save phone contacts with an expiry timer — they automatically delete after a set period. Features Caller ID, smart labels, archiving, and more.",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            downloadUrl: iosUrl,
            installUrl: ANDROID_IN_PRODUCTION
              ? ANDROID_URLS.playStore
              : undefined,
            softwareVersion: "1.0",
            author: {
              "@type": "Organization",
              name: "Temp Contacts",
              url: siteUrl,
            },
            featureList:
              "Expiry timer, Caller ID, Smart labels, Call and message, Archive contacts, Cloud sync",
          }),
        }}
      />

      {/* FAQ schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      {/* BreadcrumbList schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: siteUrl,
              },
            ],
          }),
        }}
      />
    </div>
  )
}
