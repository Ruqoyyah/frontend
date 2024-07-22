import { useEffect, useState } from "react";

type paginationProps = {
  pageCount: number;
  onPageClick: (page: number) => void;
  inc?: boolean;
};
export default function GlobalPagination({
  pageCount = 10,
  onPageClick,
  inc,
}: paginationProps) {
  const [activePage, setActivePage] = useState<number>(inc ? 1 : 0);

  const handlePageClick = (page: number) => {
    if (page != activePage) {
      setActivePage(page);
      onPageClick(page);
    }
  };
  const handleNext = () => {
    setActivePage((prevPage) => {
      const nextPage = prevPage <= pageCount - 1 ? prevPage + 1 : prevPage;
      if (nextPage !== prevPage) {
        onPageClick(nextPage);
      }
      return nextPage;
    });
  };
  const handlePrev = () => {
    if (activePage > 0) {
      const prevPage = activePage - 1;
      console.log(prevPage, "going bsck");
      setActivePage(prevPage);
      onPageClick(prevPage);
    }
  };

  useEffect(() => {
    console.log(activePage);
  }, [activePage]);

  return (
    <div
      className="flex gap-2 items-center"
      style={{
        width: "fit-content",
      }}
    >
      <div
        className="pageLinknew"
        style={{ cursor: "pointer" }}
        onClick={() => handlePrev()}
      >
        <p className="mb-0">Previous</p>
      </div>
      <div className="flex gap-2 items-center" style={{ width: "fit-content" }}>
        {Array.from({ length: pageCount }, (_, index) => {
          const newIndex = inc ? index + 1 : index;
          return (
            <div
              key={newIndex} // Key should be unique, so using newIndex + 1
              className={`pageLinknew ${
                activePage === newIndex ? "active" : ""
              }`}
              onClick={() => handlePageClick(newIndex)} // Handling click
              style={{ cursor: "pointer" }}
            >
              <p className="mb-0">{index + 1}</p>
            </div>
          );
        })}
      </div>
      <div
        className="pageLinknew"
        style={{ cursor: "pointer" }}
        onClick={() => handleNext()}
      >
        <p className="mb-0">Next</p>
      </div>
    </div>
  );
}
