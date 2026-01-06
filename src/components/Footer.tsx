import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <span className="font-serif text-xl font-semibold">
              Canto<span className="italic">de</span>Fe
            </span>
          </div>
          
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/privacy-policy" className="hover:text-foreground transition-colors">
              Política de Privacidad
            </Link>
            <a href="#" className="hover:text-foreground transition-colors">
              Términos de Servicio
            </a>
            <a href="mailto:CantodeFe@proton.me" className="hover:text-foreground transition-colors">
              Contacto
            </a>
          </nav>

          <p className="text-sm text-muted-foreground">
            © 2024 CantodeFe. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
