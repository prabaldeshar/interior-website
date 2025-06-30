"use client";

import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../constants/constants";

const ContactInfoContext = createContext();

const fetchContactInfo = async () => {
  const res = await fetch(`${BASE_URL}/contact-info/`);
  if (!res.ok) throw new Error("Failed to fetch contact info");
  return res.json();
};

export const ContactInfoProvider = ({ children }) => {
  const {
    data: contactInfo,
    isLoading,
    isError,
    error,
  } = useQuery({
    data: contactInfo,
    queryKey: ["contactInfo"],
    queryFn: fetchContactInfo,
    staleTime: 10 * 60 * 1000, // cache valid for 10 mins
  });

  return (
    <ContactInfoContext.Provider value={{ contactInfo, isLoading, isError, error }}>
      {children}
    </ContactInfoContext.Provider>
  );
};

export const useContactInfo = () => useContext(ContactInfoContext);
