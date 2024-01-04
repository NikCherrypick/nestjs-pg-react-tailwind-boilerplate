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
      <h1 className="text-3xl font-bold underline text-cyan-500">
        Hello world!
      </h1>
      {!isLoading ? (
        <div>
          Finsihed loading users:
          {data?.map((user: { id: number; name: string }) => {
            return <span key={user.id}>Users: {JSON.stringify(user)}</span>;
          })}
        </div>
      ) : (
        "Loading"
      )}
    </>
  );
}

export default App;
