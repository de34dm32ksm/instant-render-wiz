import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const categories = [
  { title: "For Your Partner", emoji: "💑" },
  { title: "For Children", emoji: "👶" },
  { title: "For Loss", emoji: "🕊️" },
  { title: "For Parents", emoji: "👨‍👩‍👧" },
  { title: "For Yourself", emoji: "🙏" },
  { title: "For Strength", emoji: "💪" },
  { title: "For Healing", emoji: "❤️‍🩹" },
  { title: "For Prayers", emoji: "✝️" },
  { title: "For Breakthroughs", emoji: "⭐" },
];

const GiftCategories = () => {
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
          Gift a PrayerSong to a Loved One, or to Yourself!
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto mb-12">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="group cursor-pointer"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-secondary to-muted flex items-center justify-center text-5xl group-hover:scale-105 transition-transform shadow-soft group-hover:shadow-card">
                {category.emoji}
              </div>
              <h3 className="text-center mt-3 font-medium text-sm">{category.title}</h3>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center"
        >
          <Button size="lg" className="px-8">
            Start Creating Your Song
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default GiftCategories;
