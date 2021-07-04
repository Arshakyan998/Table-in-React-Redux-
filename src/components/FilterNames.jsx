import React from "react";

function FilterNames({ changeStateTable }) {
  const [search, setSearch] = React.useState({
    name: "",
    phone: "",
  });

  const hendlerInput = (e, val) => {
    setSearch({
      ...search,

      [val]: e.target.value,
    });
  };
  const changeState = (e) => {
    if (e.key === "Enter") {
      changeStateTable(search);

      setSearch({
        name: "",
        phone: "",
      });
    }
  };

  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon1">
          @
        </span>
      </div>
      <input
        type="text"
        className="form-control"
        placeholder="firstName"
        aria-label="Username"
        aria-describedby="basic-addon1"
        value={search.name}
        onInput={(e) => hendlerInput(e, "name")}
        onKeyPress={changeState}
      />

      <input
        type="text"
        className="form-control"
        placeholder="phone"
        aria-label="Username"
        aria-describedby="basic-addon1"
        value={search.phone}
        onInput={(e) => hendlerInput(e, "phone")}
        onKeyPress={changeState}
      />
    </div>
  );
}

export default FilterNames;
