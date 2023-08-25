import { QueryClient, QueryClientProvider, useQuery } from "react-query";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Users />
    </QueryClientProvider>
  );
}

function Users() {
  const fetchUsers = async () => {
    const res = await fetch("http://localhost:3000/users");
    return res.json();
  };

  const { data, isLoading } = useQuery("users", fetchUsers);

  // Mutations

  return (
    <>
      {!isLoading
        ? data?.map((user: { id: number; name: string }) => {
            return <p key={user.id}>{JSON.stringify(user)}</p>;
          })
        : "Loading"}
    </>
  );
}

export default App;
