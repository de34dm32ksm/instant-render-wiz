import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/40">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <span className="font-serif text-2xl font-semibold tracking-tight">
            <span className="italic">Prayer</span>Song
          </span>
        </a>
        
        <nav className="hidden md:flex items-center gap-6">
          <a 
            href="#track" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Track Order
          </a>
          <a 
            href="#reviews" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Reviews
          </a>
          <Button variant="default" size="sm" className="font-medium">
            Create Your Song
          </Button>
        </nav>

        <Button variant="default" size="sm" className="md:hidden font-medium">
          Create
        </Button>
      </div>
    </header>
  );
};

export default Header;
