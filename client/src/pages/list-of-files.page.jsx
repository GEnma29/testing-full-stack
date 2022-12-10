import React from "react";
import Spinner from "react-bootstrap/Spinner";
// components
import DarkExample from "../components/table/table.component";
import TableItemComponent from "../components/table/table-item.component";
import BasicAlert from "../components/commons/alert.component";

const ListOfFilesPage = ({ isLoading, isError, data }) => {
  if (isLoading) return <Spinner animation="grow" size={50} />;
  if (isError)
    return (
      <BasicAlert
        mensagge={"we sorry but have problems for show files"}
        variant={"danger"}
      />
    );
  return (
    <>
      {data.length > 0 ? (
        <DarkExample>
          {data.map(({ file, lines }) =>
            lines.map((item) => (
              <TableItemComponent
                fileName={file}
                Text={item.text}
                Number={item.number}
                Hex={item.hex}
              />
            ))
          )}
        </DarkExample>
      ) : (
        <BasicAlert 
         mensagge={"this element exist but don't have info"}
         variant={"info"}
         />
      )}
    </>
  );
};

export default ListOfFilesPage;
