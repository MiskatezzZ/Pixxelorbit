import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle/60 bg-background py-16 text-sm text-muted-foreground">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col md:flex-row justify-between gap-8 md:items-start">
          <div className="space-y-4 max-w-xs">
            <Link href="/" className="text-foreground font-semibold tracking-wider">PIXXELORBIT</Link>
            <p className="text-muted-foreground/80 font-serif italic">
              Calm systems. Better flow. Smarter growth.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-foreground font-medium text-xs uppercase tracking-wider">Pages</span>
              <Link href="/services" className="hover:text-foreground transition-colors">Services</Link>
              <Link href="/work" className="hover:text-foreground transition-colors">Work</Link>
              <Link href="/approach" className="hover:text-foreground transition-colors">Approach</Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-foreground font-medium text-xs uppercase tracking-wider">Socials</span>
              <a href="#" className="hover:text-foreground transition-colors">Twitter / X</a>
              <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border-subtle/40 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Pixxelorbit. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="mailto:hello@pixxelorbit.studio" className="hover:text-foreground transition-colors">
              hello@pixxelorbit.studio
            </Link>
            <span>Built remotely worldwide.</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
