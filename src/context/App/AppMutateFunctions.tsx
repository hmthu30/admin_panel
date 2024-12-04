const getTokenMutation = async () => {
  const response = await fetch("/api/auth/token");
  
  console.log("🚀 ~ getTokenMutation ~ response:", response)
  if (!response.ok) {
    throw new Error("Failed to get token");
  }
  return response.json();
};

export { getTokenMutation };
