export default function Footer() {
  return (
    <footer className="border-t border-primary/15 bg-background py-10">
      <div className="site-container flex flex-col gap-6 text-base text-body md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-base font-semibold text-heading">
            Apex Learning Academy
          </p>
          <p className="mt-2 max-w-sm">
            Premium coaching in Virar, Mumbai focused on results, clarity, and
            confidence.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-base font-medium">
          <a href="#courses" className="transition-colors hover:text-heading">
            Courses
          </a>
          <a href="#results" className="transition-colors hover:text-heading">
            Results
          </a>
          <a href="#contact" className="transition-colors hover:text-heading">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
