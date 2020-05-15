import React from "react";
import "./App.css";

//GraphQL
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

//components
import Shop from "./components/shop";
import Header from "./components/Header";

const client = new ApolloClient({
  uri: "https://pangaea-interviews.now.sh/api/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header />
        <Shop />
      </div>
    </ApolloProvider>
  );
}

export default App;
