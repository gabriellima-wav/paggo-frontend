import React, { useEffect, useState } from "react";
import axios from "axios";

const TestConnection = () => {
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    const checkConnection = async () => {
      try {
        const response = await axios.get("http://localhost:3000/status");
        setStatus(response.data.message);
      } catch (error) {
        console.error(error); // Loga o erro no console
        setStatus("Failed to connect to the back-end");
      }
    };

    checkConnection();
  }, []);

  return (
    <div>
      <h1>Back-end Status:</h1>
      <p>{status}</p>
    </div>
  );
};

export default TestConnection;
