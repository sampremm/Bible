import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-8 text-[var(--color-primary)]">
          ScriptureCloud
        </h2>

        <nav className="flex flex-col gap-4">
          <Link className="hover:text-[var(--color-primary)]" to="/">
            Search
          </Link>
          <Link className="hover:text-[var(--color-primary)]" to="/translations">
            Translations
          </Link>
          <Link className="hover:text-[var(--color-primary)]" to="/random">
            Random Verse
          </Link>
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8">
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-semibold">
            Scripture Dashboard
          </h1>
          <div className="text-sm text-gray-500">
            SaaS Bible Platform
          </div>
        </div>

        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
