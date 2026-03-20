import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center gap-8 px-6 py-24">
      <p className="text-sm uppercase tracking-widest text-neutral-500">
        ORYEN
      </p>
      <h1 className="text-3xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100">
        Home
      </h1>
      <nav className="flex flex-col gap-2 text-sm text-neutral-600 dark:text-neutral-400">
        <Link className="hover:underline" href="/services">
          Services
        </Link>
        <Link className="hover:underline" href="/insights">
          Insights
        </Link>
        <Link className="hover:underline" href="/about">
          About
        </Link>
        <Link className="hover:underline" href="/contact">
          Contact
        </Link>
      </nav>
    </main>
  );
}
