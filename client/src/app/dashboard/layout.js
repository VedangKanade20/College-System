import ProfileSegment from "./_components/ProfileSegment";
import Sidebar from "./_components/Sidebar";

export default function RootLayout({ children }) {
  return (
    <section className="flex w-[100%]">
      <Sidebar />
      <main className="flex-1 p-6 w-[80%] bg-[#F9FAFC] min-h-screen">
        <ProfileSegment />
        {children}
      </main>
    </section>
  );
}
