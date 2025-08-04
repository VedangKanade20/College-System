import Sidebar from "./_components/Sidebar";

export default function RootLayout({ children }) {
  return (
    <section className="flex">
      <Sidebar />
      <main className="flex-1 p-6 w-[80%] bg-gray-50 min-h-screen">
        {children}
      </main>
    </section>
  );
}
