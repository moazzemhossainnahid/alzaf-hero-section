import Banner from "@/components/Banner";
import Header from "@/components/Header";

export default function Home() {


  return (
    <div className="w-full">
      <Header />
      <main className="w-full min-h-screen">
        <div className="container mx-auto">
          <Banner />
        </div>
      </main>
    </div>
  );
}
