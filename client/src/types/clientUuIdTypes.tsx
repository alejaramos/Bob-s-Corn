import React from 'react';

export interface ClientContextType {
  clientId: string;
  totalQuantity: number | null;
  updateTotalQuantity: (newTotal: number) => void;
  cornQuantity: () => Promise<void>;
  dataReady: boolean;
}

export interface ClientProviderProps {
  children: React.ReactNode;
}