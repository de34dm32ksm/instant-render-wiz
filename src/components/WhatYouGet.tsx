import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Music, FileText, Clock, Play, Pause, Shield } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Music,
    title: "Canción de Calidad Radial",
    description: "CanciónDivina de calidad radial, lista para compartir",
  },
  {
    icon: FileText,
    title: "Letras Personalizadas",
    description: "Letras personalizadas inspiradas en tu historia",
  },
  {
    icon: Clock,
    title: "Entrega en 7 Días",
    description: "Recibe tu canción terminada en solo 7 días",
  },
];

const WhatYouGet = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-serif font-semibold text-center mb-4"
        >
          Lo Que Recibes
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-center text-muted-foreground mb-12 max-w-xl mx-auto"
        >
          Una vez que terminemos tu canción, recibirás un correo con un enlace para reproducir tu CanciónDivina ¡como abajo!
        </motion.p>

        <div className="max-w-4xl mx-auto">
          {/* Audio Player Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Card className="mb-10 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 hover:bg-primary/90 transition-colors"
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6" />
                    ) : (
                      <Play className="w-6 h-6 ml-1" />
                    )}
                  </button>
                  <div className="flex-1 min-w-0">
                    <p className="font-serif font-semibold text-lg truncate">Tu CanciónDivina Personalizada</p>
                    <p className="text-sm text-muted-foreground">CanciónDivina</p>
                    <div className="mt-2 h-1.5 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: "35%" }} />
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>0:00</span>
                      <span>3:54</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-center"
          >
            <Link to="/create?step=basics">
              <Button size="lg" className="px-8 mb-3">
                Crear Mi Canción Personalizada
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              <Shield className="w-4 h-4" />
              Garantía de Devolución de 30 Días
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
