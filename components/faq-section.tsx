import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const faqs = [
  {
    question: "What is Temp Contacts?",
    answer:
      "Temp Contacts is a free mobile app for iOS and Android that lets you save phone contacts with an expiry timer. When the timer runs out, the contact is automatically deleted — keeping your address book clean without any effort.",
  },
  {
    question: "How does the expiry timer work?",
    answer:
      "When you add a contact, you choose how long you need it — from a few hours to several months. Once that time is up, Temp Contacts automatically removes the contact. You can also extend the timer or archive the contact before it expires.",
  },
  {
    question: "Is Temp Contacts free?",
    answer:
      "Yes, Temp Contacts is free to use with no account required. Core features like expiry timers, Caller ID, built-in labels, call, and messaging are all free. Premium unlocks extras like custom labels, extended expiry durations, and cloud sync across devices.",
  },
  {
    question: "Does it work on both iOS and Android?",
    answer:
      "Yes. Temp Contacts is available on the Apple App Store for iOS devices and on Google Play for Android devices.",
  },
  {
    question: "Can I recover a contact after it expires?",
    answer:
      "If you archive a contact before it expires, you can retrieve it at any time. However, once a contact expires and hasn't been archived, it is permanently deleted to protect your privacy.",
  },
  {
    question: "Does the app access my existing phone contacts?",
    answer:
      "No. Temp Contacts stores temporary contacts separately from your phone's built-in address book. Your existing contacts are never read, modified, or accessed by the app.",
  },
  {
    question: "How does Caller ID work in Temp Contacts?",
    answer:
      "When someone saved in Temp Contacts calls you, the app displays their name, label (like Delivery or Dating), and expiry status on your incoming call screen — even when the app is in the background. No more wondering who's calling.",
  },
  {
    question: "What are labels used for?",
    answer:
      "Labels help you categorize temporary contacts by context — Delivery, Events, Travel, Services, Gig Work, and Dating are built in. Premium users can create custom labels. Labels appear on the contact card and during Caller ID so you always have context.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="border-t border-border/50 bg-secondary/30 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Everything you need to know about Temp Contacts
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-sm font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
