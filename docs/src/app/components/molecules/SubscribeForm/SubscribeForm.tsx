"use client";
import React, { useState } from "react";
import { SingleInputForm } from "../../atoms/SingleInputForm";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import Firebase from "@/core/services/firebase-service";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function SubscribeInput() {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const firebase = new Firebase();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    await firebase.storeEmail(value);

    setValue("");
    toast("Subscribed Successfully!");
    setIsLoading(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="mt-4">
      <div className="block lg:max-w-lg w-full">
        <SingleInputForm
          placeholder="Your email address"
          submitButtonText="Subscribe"
          label="Subscribe to get notified when we launch!"
          color="primary"
          onChange={handleChange}
          onSubmit={handleSubmit}
          value={value}
          type="email"
          className="font-sans px-2 lg:px-0"
          disabled={isLoading}
        />
      </div>
    </div>
  );
}
