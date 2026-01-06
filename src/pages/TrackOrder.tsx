import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle } from "lucide-react";

const TrackOrder = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Sigue Tus Canciones
            </h1>
            <p className="text-lg text-muted-foreground">
              Ingresa tu correo electrónico para ver el estado de tu Canto de Oración y saber cuándo será entregado.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 mb-8">
            <div className="flex items-start gap-3 mb-6">
              <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h2 className="font-semibold text-lg mb-2">
                  ¡Completamos cada pedido—estás cubierto!
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Tenemos una tasa de finalización del 100%. Si no encuentras tu canción, normalmente se debe a un correo mal escrito o a filtros de email.
                </p>
                <p className="text-muted-foreground text-sm mt-2">
                  Solo escríbenos a{" "}
                  <a 
                    href="mailto:CantodeFe@proton.me" 
                    className="text-primary hover:underline font-medium"
                  >
                    CantodeFe@proton.me
                  </a>{" "}
                  y te la reenviamos de inmediato.
                </p>
                <p className="text-muted-foreground text-sm mt-2">
                  Respondemos en un plazo de 3 a 5 días durante días festivos, y a menudo mucho antes.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Ingresa tu correo electrónico
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@correo.com"
                  className="w-full"
                />
              </div>
              <Button className="w-full" size="lg">
                Rastrear Tu Canción
              </Button>
            </div>
          </div>

          <div className="bg-muted/50 border border-border rounded-2xl p-8 text-center">
            <div className="flex justify-center mb-4">
              <Mail className="w-10 h-10 text-muted-foreground" />
            </div>
            <h2 className="font-semibold text-xl mb-3">¿Necesitas Ayuda?</h2>
            <p className="text-muted-foreground text-sm mb-2">
              Si tienes problemas para encontrar tu pedido o tienes alguna pregunta, escríbenos a{" "}
              <a 
                href="mailto:CantodeFe@proton.me" 
                className="text-primary hover:underline font-medium"
              >
                CantodeFe@proton.me
              </a>.
            </p>
            <p className="text-muted-foreground text-sm mb-6">
              Respondemos en 3 a 5 días durante días festivos, generalmente antes.
            </p>
            <Button variant="outline" asChild>
              <a href="mailto:CantodeFe@proton.me">
                Contactar Soporte
              </a>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TrackOrder;
