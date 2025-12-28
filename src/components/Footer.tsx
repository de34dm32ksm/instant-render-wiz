const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <span className="font-serif text-xl font-semibold">
              <span className="italic">Prayer</span>Song
            </span>
          </div>
          
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="mailto:hello@prayersong.com" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          <p className="text-sm text-muted-foreground">
            © 2024 PrayerSong. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
