import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center container mx-auto px-4 text-center">
      <h2 className="text-6xl font-bold text-primary mb-4">404</h2>
      <h3 className="text-2xl font-semibold mb-6">Page Not Found</h3>
      <p className="text-slate-600 mb-8 max-w-md mx-auto">
        We couldn't find the page you're looking for. It might have been moved or doesn't exist.
      </p>
      <Link href="/">
        <Button size="lg" className="bg-primary hover:bg-slate-800">
          Return to Homepage
        </Button>
      </Link>
    </div>
  )
}
