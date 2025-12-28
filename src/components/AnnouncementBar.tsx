import { ArrowRight } from "lucide-react";

const AnnouncementBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2.5 px-4 text-center">
      <a 
        href="#create" 
        className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-90 transition-opacity"
      >
        <span>End of Year Sale on Now!</span>
        <span className="underline inline-flex items-center gap-1">
          Start Now <ArrowRight className="w-4 h-4" />
        </span>
      </a>
    </div>
  );
};

export default AnnouncementBar;
