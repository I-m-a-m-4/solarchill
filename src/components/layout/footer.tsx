import Link from "next/link";
import { Hexagon, Twitter, Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
           <div className="flex flex-col gap-4">
            <Link href="#" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <span className="relative inline-grid h-10 w-10 place-items-center rounded-xl bg-neutral-900 ring-1 ring-white/10">
                <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20"></span>
                <Hexagon className="h-6 w-6 text-emerald-300" />
              </span>
              <div className="flex flex-col leading-none">
                <span className="text-sm font-medium text-neutral-300">SOLARCHILL</span>
                <span className="text-xs text-neutral-500">SOLUTIONS</span>
              </div>
            </Link>
            <p className="mt-2 text-xs text-neutral-500 max-w-sm">
              Cooling Powered by the Sun: Reducing Waste, Creating Opportunity.
            </p>
             <p className="mt-2 text-xs text-neutral-500">© {new Date().getFullYear()} SolarChill Solutions. A SWED 200 Project.</p>
          </div>
          <div className="grid grid-cols-3 gap-8 md:col-span-2">
            <div>
              <h4 className="mb-3 text-sm font-semibold tracking-tight text-white">Project</h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><Link href="#about" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">About</Link></li>
                <li><Link href="#features" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Features</Link></li>
                <li><Link href="#testimonials" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Testimonials</Link></li>
                <li><Link href="#faq" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold tracking-tight text-white">Company</h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><Link href="#impact" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Impact</Link></li>
                <li><Link href="#contact" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Join Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold tracking-tight text-white">Connect</h4>
               <div className="mt-2 flex items-center gap-3">
                <a href="#" className="grid h-9 w-9 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 hover:scale-110 transition-all duration-200" aria-label="Twitter">
                  <Twitter className="h-4 w-4 text-neutral-300" />
                </a>
                <a href="#" className="grid h-9 w-9 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 hover:scale-110 transition-all duration-200" aria-label="GitHub">
                  <Github className="h-4 w-4 text-neutral-300" />
                </a>
                <a href="#" className="grid h-9 w-9 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 hover:scale-110 transition-all duration-200" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4 text-neutral-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
