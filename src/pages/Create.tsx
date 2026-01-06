import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

const STEPS = ["basics", "voice", "occasion", "story", "style", "details", "review"];

const voiceOptions = [
  "Voz femenina",
  "Voz masculina",
  "Sin preferencia",
];

const recipientOptions = [
  "Esposo",
  "Esposa",
  "Hermano",
  "Hermana", 
  "Amigo",
  "Amiga",
  "Niño",
  "Niña",
  "Padre",
  "Madre",
  "Para mí",
  "Otro",
];


const genreOptions = [
  "Pop",
  "Reggaetón",
  "Rock",
  "Mariachi",
  "Cumbia",
  "Rap",
  "Bachata",
  "Salsa",
  "Merengue",
  "Himnos",
];

const Create = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const currentStep = searchParams.get("step") || "basics";
  const stepIndex = STEPS.indexOf(currentStep);
  const progress = ((stepIndex + 1) / STEPS.length) * 100;

  const [formData, setFormData] = useState({
    recipient: "",
    recipientName: "",
    customRelationship: "",
    voiceGender: "",
    genre: "",
    qualities: "",
    memories: "",
    specialMessage: "",
    email: "",
  });

  const handleNext = () => {
    if (stepIndex < STEPS.length - 1) {
      setSearchParams({ step: STEPS[stepIndex + 1] });
    }
  };

  const handleBack = () => {
    if (stepIndex > 0) {
      setSearchParams({ step: STEPS[stepIndex - 1] });
    } else {
      navigate("/");
    }
  };

  const handleSelectOption = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmitToGoogleForm = () => {
    const formURL = "https://docs.google.com/forms/d/e/1FAIpQLScEPvbdWRJpR-Y5liv86CUXXJlPeRxEHXj_8iEToRk_5U0daA/formResponse";
    
    const formDataToSend = new FormData();
    formDataToSend.append("entry.646865340", formData.recipientName);
    
    fetch(formURL, {
      method: "POST",
      body: formDataToSend,
      mode: "no-cors"
    })
    .then(() => {
      console.log("Form submitted successfully");
      alert("¡Gracias! Tu nombre ha sido enviado.");
    })
    .catch(error => {
      console.error("Error:", error);
    });
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case "basics":
        return (
          <motion.div
            key="basics"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-3">
                Comencemos con lo básico
              </h1>
              <p className="text-muted-foreground">
                Cuéntanos sobre la persona especial en tu vida
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-3">
                  ¿Para quién es? <span className="text-primary">*</span>
                </label>
                <div className="flex flex-wrap gap-3">
                  {recipientOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleSelectOption("recipient", option)}
                      className={`px-4 py-2.5 rounded-full border text-sm font-medium transition-all ${
                        formData.recipient === option
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-background border-border hover:border-primary/50"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  ¿Cómo se llama?
                </label>
                <Input
                  placeholder="Escribe su nombre"
                  value={formData.recipientName}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      recipientName: e.target.value,
                    }))
                  }
                  className="max-w-md"
                />
                <p className="text-xs text-muted-foreground mt-2">
                  Tip: agrega la pronunciación para mayor claridad (ej. Alicia: ah-lee-sha)
                </p>
              </div>

              {formData.recipient === "Otro" && (
                <div>
                  <label className="block text-sm font-medium mb-2">
                    ¿Cuál es tu relación con ellos?
                  </label>
                  <Input
                    placeholder="Ej: Abuelo, Tía, Primo, etc."
                    value={formData.customRelationship}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        customRelationship: e.target.value,
                      }))
                    }
                    className="max-w-md"
                  />
                </div>
              )}
            </div>
          </motion.div>
        );

      case "voice":
        return (
          <motion.div
            key="voice"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-3">
                Género de voz preferido
              </h1>
              <p className="text-muted-foreground">
                Recomendamos elegir tu propio género para que la voz te resulte más personal.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 justify-center max-w-2xl mx-auto">
              {voiceOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelectOption("voiceGender", option)}
                  className={`px-5 py-3 rounded-full border text-sm font-medium transition-all ${
                    formData.voiceGender === option
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background border-border hover:border-primary/50"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </motion.div>
        );

      case "occasion":
        return (
          <motion.div
            key="occasion"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-3">
                Elige un género
              </h1>
              <p className="text-muted-foreground">
                Género preferido <span className="text-primary">*</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-3 justify-center max-w-2xl mx-auto">
              {genreOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelectOption("genre", option)}
                  className={`px-5 py-3 rounded-full border text-sm font-medium transition-all ${
                    formData.genre === option
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background border-border hover:border-primary/50"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </motion.div>
        );

      case "story":
        return (
          <motion.div
            key="story"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-3">
                ¿Qué los hace especiales?
              </h1>
              <p className="text-muted-foreground">
                Describe su carácter y las cualidades que más te gustan.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <label className="block text-sm font-medium mb-2">
                Sus cualidades más hermosas
              </label>
              <Textarea
                placeholder="Describe las cualidades que más admiras de esta persona..."
                value={formData.qualities}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, qualities: e.target.value }))
                }
                className="min-h-[200px]"
              />
            </div>
          </motion.div>
        );

      case "style":
        return (
          <motion.div
            key="style"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-3">
                Comparte tus recuerdos favoritos
              </h1>
              <p className="text-muted-foreground">
                ¿Qué momentos con ellos atesoras más?
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <label className="block text-sm font-medium mb-2">
                Momentos especiales juntos
              </label>
              <Textarea
                placeholder="Comparte los momentos y recuerdos que más atesoras..."
                value={formData.memories}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, memories: e.target.value }))
                }
                className="min-h-[200px]"
              />
            </div>
          </motion.div>
        );

      case "details":
        return (
          <motion.div
            key="details"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-3">
                Un mensaje desde tu corazón
              </h1>
              <p className="text-muted-foreground">
                Escribe cualquier otra cosa que sientas que sea relevante incluir en tu canción, ¡y haremos todo lo posible por incorporarlo!
              </p>
            </div>

            <div className="max-w-2xl mx-auto space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Mensaje especial
                </label>
                <Textarea
                  placeholder="Escribe tu mensaje especial aquí..."
                  value={formData.specialMessage}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      specialMessage: e.target.value,
                    }))
                  }
                  className="min-h-[200px]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Tu correo electrónico <span className="text-primary">*</span>
                </label>
                <Input
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className="max-w-md"
                />
                <p className="text-xs text-muted-foreground mt-2">
                  Aquí recibirás tu canción terminada.
                </p>
              </div>
            </div>
          </motion.div>
        );

      case "review":
        return (
          <motion.div
            key="review"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-3">
                Revisa tu pedido
              </h1>
              <p className="text-muted-foreground">
                Confirma los detalles de tu canción personalizada
              </p>
            </div>

            <div className="max-w-2xl mx-auto bg-card rounded-2xl p-6 space-y-4 border">
              <div className="flex justify-between py-3 border-b">
                <span className="text-muted-foreground">Para:</span>
                <span className="font-medium">
                  {formData.recipientName || formData.recipient || "—"}
                </span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="text-muted-foreground">Género:</span>
                <span className="font-medium">{formData.genre || "—"}</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="text-muted-foreground">Email:</span>
                <span className="font-medium">{formData.email || "—"}</span>
              </div>
              <div className="py-3 border-b">
                <span className="text-muted-foreground block mb-2">Cualidades:</span>
                <p className="text-sm">
                  {formData.qualities || "—"}
                </p>
              </div>
              <div className="py-3 border-b">
                <span className="text-muted-foreground block mb-2">Momentos especiales:</span>
                <p className="text-sm">
                  {formData.memories || "—"}
                </p>
              </div>
              <div className="py-3">
                <span className="text-muted-foreground block mb-2">Mensaje especial:</span>
                <p className="text-sm">
                  {formData.specialMessage || "—"}
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" className="px-12" onClick={handleSubmitToGoogleForm}>
                Continuar al Pago
              </Button>
              <p className="text-xs text-muted-foreground mt-3">
                Garantía de devolución de 30 días
              </p>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              Paso {stepIndex + 1} de {STEPS.length}
            </span>
            <a href="/" className="font-serif text-xl font-semibold">
              <span className="italic">Canción</span>Divina
            </a>
            <span className="text-sm text-muted-foreground">
              {Math.round(progress)}% Completo
            </span>
          </div>
          {/* Progress bar */}
          <div className="mt-3 h-1 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">{renderStepContent()}</AnimatePresence>

          {/* Navigation Buttons */}
          {currentStep !== "review" && (
            <div className="flex items-center justify-between mt-12 max-w-2xl mx-auto">
              <Button
                variant="outline"
                onClick={handleBack}
                className="gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Atrás
              </Button>
              <Button onClick={handleNext} className="gap-2">
                Siguiente
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          )}

          {currentStep === "review" && (
            <div className="flex justify-center mt-8">
              <Button
                variant="outline"
                onClick={handleBack}
                className="gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Atrás
              </Button>
            </div>
          )}

          {/* Footer */}
          <p className="text-center text-xs text-muted-foreground mt-8">
            Al continuar, aceptas nuestros{" "}
            <a href="#" className="underline">
              Términos de Servicio
            </a>{" "}
            y{" "}
            <a href="#" className="underline">
              Política de Privacidad
            </a>
            .
          </p>
          <p className="text-center text-xs text-muted-foreground/50 mt-4 uppercase tracking-widest">
            canciondivina.com
          </p>
        </div>
      </main>
    </div>
  );
};

export default Create;
