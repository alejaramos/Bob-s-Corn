import { PurchaseResponse } from '../types/purchaseTypesAnswr.tsx';

export const purchaseCorn = async (clientUuId: string, quantity: number = 1): Promise<PurchaseResponse> => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/purchases`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        clientUuId,
        quantity,
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error making purchase:', error);
    return {
      success: false,
      message: error.message,
    };
  }
};