import { motion } from "framer-motion";
import { Star, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Oh praise God! This is absolutely breathtaking. I can't believe it… I am going to have a hard time keeping this a secret until Sunday. We will listen to it on our way to church!",
    author: "Wendy B.",
    verified: true,
    songTitle: "God Gave Me You",
  },
  {
    quote: "Very very wonderful song. I absolutely loved it and so did Dave! I put it on my FB, I sent it to his boys so they could hear it… I will be singing 🎵 your praises.",
    author: "Markeeta B.",
    verified: true,
    songTitle: "His Love Story",
  },
  {
    quote: "Absolutely beautiful, you captured such special moments… we both were crying. Can not asked for a more beautiful song. Thank you so much for this amazing gift.",
    author: "Pamela S.",
    verified: true,
    songTitle: "I Still Believe",
  },
];

const songPreviews = [
  { title: "Three Squeezes and a Miracle", artist: "PrayerSong" },
  { title: "My Heart is Yours", artist: "PrayerSong" },
  { title: "Mommy's Love, God's Promise", artist: "PrayerSong" },
  { title: "Chosen Hearts", artist: "PrayerSong" },
];

const Testimonials = () => {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-serif font-semibold text-center mb-12"
        >
          Why 1000+ Customers Love PrayerSong
        </motion.h2>

        {/* Song Previews Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          {songPreviews.map((song, index) => (
            <motion.div
              key={song.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <Card className="overflow-hidden group cursor-pointer hover:shadow-card transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 relative flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-card shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-primary fill-primary" />
                  </div>
                </div>
                <CardContent className="p-3">
                  <p className="text-sm font-medium truncate">{song.title}</p>
                  <p className="text-xs text-muted-foreground">{song.artist}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Text Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-sm font-semibold">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{testimonial.author}</p>
                      {testimonial.verified && (
                        <p className="text-xs text-muted-foreground">Verified Customer</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
