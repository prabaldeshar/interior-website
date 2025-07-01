"use client";

import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../constants/constants";

const AppDataContext  = createContext();

const fetchContactInfo = async () => {
  const res = await fetch(`${BASE_URL}/contact-info/`);
  if (!res.ok) throw new Error("Failed to fetch contact info");
  return res.json();
};

const fetchHomepageImages = async () => {
  const res = await fetch(`${BASE_URL}/homepage-images/`);
  if (!res.ok) throw new Error("Failed to fetch homepage images");
  return res.json();
};

const fetchServices = async () => {
  const response = await fetch(`${BASE_URL}/services/`);
  if (!response.ok) throw new Error("Failed to fetch services");
  const json = await response.json();

  if (!json.services || !Array.isArray(json.services)) {
    throw new Error("Invalid response from server");
  }

  console.log(json.services);
  return json.services;
};

export const AppDataProvider  = ({ children }) => {
   const {
    data: contactInfo,
    isLoading: loadingContact,
    isError: errorContact,
    error: contactError,
  } = useQuery({
    queryKey: ["contactInfo"],
    queryFn: fetchContactInfo,
    staleTime: 10 * 60 * 1000,
  });

  const {
    data: homepageImages,
    isLoading: loadingImages,
    isError: errorImages,
    error: homepageError,
  } = useQuery({
    queryKey: ["homepageImages"],
    queryFn: fetchHomepageImages,
    staleTime: 10 * 60 * 1000,
  });

  const { data: services, isLoading: isServicesLoading, isError: isServicesError } = useQuery({
      queryKey: ["services"],
      queryFn: fetchServices,
      staleTime: 10 * 60 * 1000, // 10 min before data is considered stale
      cacheTime: 30 * 60 * 1000, // 30 min before cache is deleted
      refetchInterval: 15 * 60 * 1000, // Refetch data every 15 min in the background
    });

  return (
    <AppDataContext.Provider
      value={{
        contactInfo,
        homepageImages,
        services,
        isLoading: loadingContact || loadingImages || isServicesLoading,
        isError: errorContact || errorImages || isServicesError,
        errors: {
          contact: contactError,
          homepage: homepageError,
        },
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
};

export const useAppData  = () => useContext(AppDataContext);
