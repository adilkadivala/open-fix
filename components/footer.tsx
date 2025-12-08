import { Command } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-12 text-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-primary rounded flex items-center justify-center text-primary-foreground">
                  <Command className="w-3 h-3" />
                </div>
                <span className="font-bold text-foreground">Social.</span>
              </div>
              <div className="flex gap-8 text-muted-foreground font-medium flex-wrap justify-center">
                <Link
                  href="#"
                  className="hover:text-foreground transition-colors"
                >
                  Privacy
                </Link>
                <Link
                  href="#"
                  className="hover:text-foreground transition-colors"
                >
                  Terms
                </Link>
                <Link
                  href="#"
                  className="hover:text-foreground transition-colors"
                >
                  Twitter
                </Link>
                <Link
                  href="#"
                  className="hover:text-foreground transition-colors"
                >
                  GitHub
                </Link>
              </div>
              <div className="text-muted-foreground">
                &copy; 2024 Social Inc.
              </div>
            </div>
          </div>
        </footer>
  )
}

export default Footer