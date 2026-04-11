import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { UseCasesSection } from "@/components/use-cases-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <UseCasesSection />
        <HowItWorksSection />
        <CTASection />
      </main>
      <Footer />

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
              "Save phone contacts with an expiry timer — they automatically delete after a set period. Perfect for dating, deliveries, gig workers, events, travel, and service providers.",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            downloadUrl:
              "https://apps.apple.com/gh/app/temp-contacts/id6760283830",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              ratingCount: "1",
            },
          }),
        }}
      />
    </div>
  )
}
