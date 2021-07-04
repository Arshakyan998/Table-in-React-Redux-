import React from "react";
import { useDispatch } from "react-redux";

import { getPageCount } from "../redux/actions/getTable";
function Paginator({ items, chnagePage, pageNumber }) {
  const dispatch = useDispatch();

  const [active, setActive] = React.useState(1);
  const [totalCountRow, setTotalCountRow] = React.useState(0);
  const [totalCountPage, setToalCountPage] = React.useState(0);
  const limitCountesPage = 50;

  const btnCount = [];

  React.useEffect(() => {
    setTotalCountRow(items);
    const getTotalCountPage = totalCountRow / limitCountesPage;
    setToalCountPage(getTotalCountPage);
  }, [items,totalCountRow]);

  const lastPage = pageNumber * limitCountesPage;
  const firstpage = lastPage - limitCountesPage+1;

  React.useEffect(() => {
    dispatch(
      getPageCount({
        lastPage,
        firstpage,
      })
    );
  }, [pageNumber]);

  for (let i = 1; i <= totalCountPage; i++) {
    btnCount.push(i);
  }
  const getPage = (i) => {
    chnagePage(i);
    setActive(i);
  };

  return (
    <div className="container">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
         
          {btnCount.map((element) => {
            return (
              <li
                className={
                  element === active ? "page-item active" : "page-item"
                }
                key={element}
              >
                <a className="page-link" onClick={() => getPage(element)}>
                  {element}
                </a>
              </li>
            );
          })}

         
        </ul>
      </nav>
    </div>
  );
}

export default Paginator;
