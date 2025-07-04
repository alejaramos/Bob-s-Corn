
export const getCornBoughtQuantity = async (
  clientUuId: string
): Promise<number> => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/purchases/client/${clientUuId}`
    );
    const data = await response.json();

    if (data.success) {
      return data.totalQuantity || 0;
    } else {
      console.error("Error fetching corn quantity:", data.message);
      return 0;
    }
  } catch (error) {
    console.error("Error", error);
    return 0;
  }
};
