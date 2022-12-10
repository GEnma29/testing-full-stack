import { useState } from "react";
import "./App.css";
import useSWR from "swr";
// components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { fetcher } from "./utils/fetcher";
import { useFiles } from "./models/files.models";
import ListOfFilesPage from "./pages/list-of-files.page";

function App() {
  const [filter, setFilter] = useState("");
  const { tableItems, isLoading, isError } = useFiles(filter);
  return (
    <div className="App">
      <div>
        <h1>List Of Files</h1>
        <input
          className="input"
          placeholder="...search one file by name"
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        />
        <Container>
          <Row className="justify-content-md-center">
            <ListOfFilesPage 
            isLoading={isLoading} 
            isError={isError}
            data={tableItems} 
            />
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
