import React from "react";
import "./App.css";
import { Provider } from "react-redux";

//GraphQL
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

//components
import Shop from "./components/shop";
import Header from "./components/Header";
import store from "./store.js";

const client = new ApolloClient({
  uri: "https://pangaea-interviews.now.sh/api/graphql",
});

function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <div className="App">
          <Header />
          <Shop />
        </div>
      </ApolloProvider>
    </Provider>
  );
}

export default App;
