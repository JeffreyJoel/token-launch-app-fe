import CryptoList from "@/components/Home/CryptoList";
import FootBar from "@/components/shared/FootBar";
import NavBar from "@/components/shared/NavBar";
import WalletConnect from "@/components/WalletConnect";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <NavBar/>
      <div className="">
        <h1>
          
        </h1>
      <CryptoList/>
    </div>
     <FootBar/>
    </main>
  );
}
