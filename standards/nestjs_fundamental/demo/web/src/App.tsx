import "./App.css";
import { useFindUserQuery } from "./generates";

function App() {
	const { data } = useFindUserQuery(
		{
			endpoint: "http://localhost:3000/graphql",
      fetchParams: {
        headers: {
          "content-type": "application/json"
        }
      }
		},
		{
			input: {
				keyword: "test",
				pageSize: 20,
        page: 2
			},
		},
	);

	return <>{JSON.stringify(data)}</>;
}

export default App;
