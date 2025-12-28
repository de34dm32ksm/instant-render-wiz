import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What makes these songs special?",
    answer: "Each PrayerSong is custom-written from your story. It is a one-of-a-kind gift rooted in Scripture, prayer, and genuine care.",
  },
  {
    question: "How long does it take to receive the song?",
    answer: "Your finished PrayerSong is delivered in 7 days. Optionally, if you need your song faster, we can deliver in 24 hours for an extra fee of $59 - simply select the priority delivery upgrade after you purchase your song.",
  },
  {
    question: "Can I get my PrayerSong faster in 24 hours?",
    answer: "Yes! While standard delivery is 7 days, we offer priority 24 hour delivery for an additional $59. Simply select the priority delivery upgrade after you purchase your song, and we'll have your PrayerSong ready in just 24 hours.",
  },
  {
    question: "What themes can I write about?",
    answer: "Anything that honors God and your loved one: birthdays, anniversaries, weddings, grief, encouragement, testimonies, or prayers for strength and healing.",
  },
  {
    question: "What is your process?",
    answer: "Every PrayerSong is created to the same standard as the songs you hear on the radio. Our lyricists pour their hearts into making each lyrics personal and meaningful, then our producers use the latest music production technology to bring your heartfelt lyrics to life. Each song typically reaches at least 3 separate team members before reaching your inbox.",
  },
  {
    question: "How will I receive the finished song?",
    answer: "You will receive a secure link via email to play your PrayerSong on any device and to easily share it with family and friends.",
  },
  {
    question: "Can I use the song in a church or event?",
    answer: "Yes, you may share and play your PrayerSong at private events and church gatherings.",
  },
];

const FAQ = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-serif font-semibold text-center mb-12"
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-10"
        >
          <p className="text-muted-foreground">
            Got More Questions?{" "}
            <a href="mailto:hello@prayersong.com" className="text-primary hover:underline font-medium">
              Reach out to us at hello@prayersong.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
