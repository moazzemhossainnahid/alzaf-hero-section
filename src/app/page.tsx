import Banner from "@/components/Banner";
import Header from "@/components/Header";

export default function Home() {


  return (
    <div className="w-full">
      <Header />
      <main className="w-full min-h-screen">
        <Banner />
      </main>
    </div>
  );
}
