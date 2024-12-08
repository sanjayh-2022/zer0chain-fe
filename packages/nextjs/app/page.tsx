"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { FaucetButton, RainbowKitCustomConnectButton ,Address} from "~~/components/scaffold-eth";


const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5 ">
          <h1 className="text-center">
            <span className="block text-4xl font-bold animate-pulse ml-7 mb-16 font-orbitron">ZEROCHAIN-WALLET</span>
          </h1>
          <div className="bg-base-300 rounded-xl" style={{width:'700px',height:'550px'}}>   
          <p className="text-center text-3xl font-semibold animate-bounce relative mb-24  top-16 ">
            Get started :
          </p>
          <div className="card glass w-80 h-120 left-44">
            <figure className="mt-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrZcQv_m3SWE6k79IWhebH-jBAkdOjDPwV6g&s"
                alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center">Create your wallet now!</h2>
              <div className="card-actions justify-center">
                <Link href="/anonaadhar">
                <button className="btn btn-primary">Create Now</button>
                </Link>
              </div>
            </div>
          </div>
          </div> 
        </div>
      </div>
    </>
  );
};

export default Home;
