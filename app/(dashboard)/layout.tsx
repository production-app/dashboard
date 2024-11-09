import Header from "@/components/page_ui/Header";
import Sidebar from "@/components/page_ui/Sidebar";

type HomeLayoutProps = {
  children: React.ReactNode;
};
export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />

      <div className="flex flex-col">
        {/* Header */}

        <Header />
        {/* {Main} */}
        {children}
      </div>
    </div>
  );
}
