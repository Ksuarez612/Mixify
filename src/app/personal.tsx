import React, { useState, useEffect } from 'react';
import { trpc } from '~/trpc'; // Adjust import based on your TRPC setup

const MyPage: React.FC = () => {
  const [data, setData] = useState<any>(null); // Adjust the type according to your data
  const [loading, setLoading] = useState<boolean>(true);

  const { data: apiData, isLoading } = trpc.example.getData.useQuery(); // Adjust the method according to your API

  useEffect(() => {
    if (!isLoading && apiData) {
      setData(apiData);
      setLoading(false);
    }
  }, [apiData, isLoading]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>My Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default MyPage;
