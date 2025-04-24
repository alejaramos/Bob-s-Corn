import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
import { v4 as uuid } from "uuid";
import {
  ClientContextType,
  ClientProviderProps,
} from "../types/clientUuIdTypes.tsx";
import { getCornBoughtQuantity } from "../services/cornQuantityService.tsx";

const ClientContext = createContext<ClientContextType | undefined>(undefined);

export const useClient = (): ClientContextType => {
  const context = useContext(ClientContext);
  if (!context) {
    throw new Error("useClient should be use by ClientProvider");
  }
  return context;
};

export const ClientProvider: React.FC<ClientProviderProps> = ({ children }) => {
  const [clientId, setClientId] = useState<string>("");
  const [totalQuantity, setTotalQuantity] = useState<number | null>(null);

  useEffect(() => {
    const storedClientId = localStorage.getItem("clientUuid");
    if (storedClientId) {
      setClientId(storedClientId);
      getCornBghtQuantity();
    } else {
      const newClientId = uuid();
      localStorage.setItem("clientUuid", newClientId);
      setClientId(newClientId);
    }
  }, []);

  const getCornBghtQuantity = React.useCallback(async () => {
    if (!clientId) return;
    try {
      const response = await getCornBoughtQuantity(clientId);
      setTotalQuantity(response || 0);
    } catch (error) {
      console.error("Error", error);
    }
  }, [clientId]);

  const updateTotalQuantity = (newTotal: number) => {
    setTotalQuantity(newTotal);
  };

  const value = useMemo(() => ({
    clientId,
    totalQuantity,
    updateTotalQuantity,
    cornQuantity: getCornBghtQuantity,
    dataReady: totalQuantity !== null
  }), [clientId, totalQuantity, getCornBghtQuantity]);

  return (
    <ClientContext.Provider value={value}>{children}</ClientContext.Provider>
  );
};