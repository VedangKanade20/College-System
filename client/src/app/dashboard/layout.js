import ProfileSegment from "./_components/ProfileSegment";
import Sidebar from "./_components/Sidebar";

export default function RootLayout({ children }) {
  return (
    <section className="flex">
      <Sidebar />
      <main className="flex-1 p-6 ml-[20%] w-[80%] bg-[#F9FAFC] min-h-screen">
        <ProfileSegment />
        {children}
      </main>
    </section>
  );
}
