import React from "react";
import { useSelector } from "react-redux";
import Paginator from "./Paginator";

function TablelContent() {
  const [pageNumber, setPageNumber] = React.useState(1);

  const { item, items } = useSelector(({ getTable }) => ({
    item: getTable.item,
    items: getTable.items,
  }));

  const chnagePage = (page) => {
    setPageNumber(page);
  };

  return (
    <div className="container">
      {items.length && item.length
        ? item.map((element) => {
            return (
              <div key={element.phone}>
                <h2>id: {element.id},</h2>
                <h2>firstName: {element.firstName},</h2>
                <h2>lastName: {element.lastName},</h2>
                <h2> @email: {element.email},</h2>
                <h2>phone: {element.phone},</h2>
                <h1>Adress</h1>
                <h3>city: {element.address.city},</h3>
                <h3>state: {element.address.state},</h3>
                <h3>streetAddress: {element.address.streetAddress},</h3>
                <h3>zig: {element.address.zip},</h3>
                <h1>description:</h1>
                <h3>{element.description}</h3>
              </div>
            );
          })
        : ""}
      {items.length >= 50 ? (
        <Paginator
          items={items.length}
          chnagePage={chnagePage}
          pageNumber={pageNumber}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default TablelContent;
