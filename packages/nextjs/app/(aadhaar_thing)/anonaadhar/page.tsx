"use client";

import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import {
  AnonAadhaarProvider,
  LogInWithAnonAadhaar,
  useAnonAadhaar,
  useProver,
  type AnonAadhaarProof,
} from "@anon-aadhaar/react";
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/solid';

export default function AnonAadhaarApp({ Component, pageProps }: AppProps) {
  const [anonAadhaar] = useAnonAadhaar();
  const [, latestProof] = useProver();
  const [proofMessage, setProofMessage] = useState<string | null>(null);
  const [postResponse, setPostResponse] = useState<any>(null);


  useEffect(() => {
    if (anonAadhaar?.status === "logged-in" && latestProof) {
      const proof = latestProof as unknown as typeof AnonAadhaarProof;
      // Store the proof in state
      setProofMessage(JSON.stringify(proof));
    }
  }, [anonAadhaar, latestProof]);

  // Function to send POST request
  const handlePostRequest = async () => {
    if (proofMessage) {
      console.log(proofMessage)
      try {
        const response = await fetch(
          "https://dbbc-14-195-142-82.ngrok-free.app/api/aadhaar/verify",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: proofMessage,
          }
        );
        console.log(response);

        const responseData = await response.json();
        setPostResponse(responseData);
      } catch (error) {
        console.error("Error sending POST request:", error);
      }
    } else {
      console.warn("Proof message is not available.");
    }
  };

  return (
    <AnonAadhaarProvider>
      <div className="overflow-x-hidden">
        <div className="card card-compact bg-base-100 w-96 h-96 shadow-xl relative left-96 ml-40 mt-24 mb-2">
          <figure className="mt-8">
            <img
              src="data:image/jpeg;base64,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"
              alt="Verification"
              width={200}
              height={200}
            />
          </figure>
          <div className="card-body items-center  text-center">
            <h2 className="card-title">Anon Aadhaar Verification</h2>
            <LogInWithAnonAadhaar nullifierSeed={108187165501252091806865217127791721015688} />
            <p className="relative top-4">Click below to send proof to the API.</p>

            {proofMessage && (
              <button
                className="btn btn-active btn-primary"
                onClick={handlePostRequest}
              >
                Submit Proof
              </button>
            )}
            
          </div>
        </div>
        {postResponse && (
          <div className="mt-20 relative left-52"
          style={{left:'39em'}}>
            {postResponse.success ? (
              <div>
                <button
                  className="btn btn-active btn-success"
                  onClick={() => {
                    window.open('https://api.whatsapp.com/send/?phone=%2B14155238886&text=join+daughter-finally&type=phone_number&app_absent=0', '_blank');
                  }}
                >
                  <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" />
                  Connect to WhatsApp
                </button>
              </div>
            ) : (
              <div className="text-red-500">
                <p>Error: {postResponse.message}</p>
              </div>
            )}
          </div>
        )}

      </div>
    </AnonAadhaarProvider>
  );
}