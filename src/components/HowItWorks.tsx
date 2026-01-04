import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText, Music, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    number: 1,
    title: "Comparte su Historia",
    icon: FileText,
  },
  {
    number: 2,
    title: "Creamos tu Canción",
    icon: Music,
  },
  {
    number: 3,
    title: "Entregada a tu Correo",
    icon: Mail,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-serif font-semibold text-center mb-12"
        >
          Cómo Funciona CanciónDivina
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {step.number}
                </span>
              </div>
              <p className="text-lg font-medium">{step.title}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center"
        >
          <Link to="/create?step=basics">
            <Button size="lg" className="px-8">
              Comienza tu Historia
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
