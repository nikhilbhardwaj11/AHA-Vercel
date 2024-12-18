import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useQueryParams } from "@/utils/useQueryParams";

const GlobalPagination = ({ paginationData }) => {
  const { currentPage, totalPages } = paginationData;

  const { limit, setQueryParams } = useQueryParams();

  const handlePageChange = (newPage, totalPages) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setQueryParams({ page: newPage, limit });
    }
  };

  return (
    <div className="py-[27px] w-full flex justify-center">
      <Pagination className="flex justify-center">
        <PaginationContent>
          {/* Previous Button */}
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() =>
                currentPage > 1 && handlePageChange(currentPage - 1, totalPages)
              }
              className={currentPage === 1 ? "disabled" : ""}
              style={{
                cursor: currentPage === 1 ? "not-allowed" : "pointer",
                backgroundColor: currentPage === 1 ? "#ccc" : "",
              }}
              disabled={currentPage === 1}
            />
          </PaginationItem>

          {/* First Page and Ellipsis */}
          {currentPage >= 4 && totalPages > 5 && (
            <>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  isActive={currentPage === 1}
                  onClick={() => handlePageChange(1, totalPages)}
                >
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            </>
          )}

          {/* Dynamic Page Numbers */}
          {(() => {
            const maxVisiblePages = 5;
            let startPage;
            let endPage;

            // Logic for last few pages
            if (currentPage > totalPages - 3) {
              startPage = Math.max(totalPages - 3, 1);
              endPage = totalPages;
            } else if (currentPage < 4) {
              // Logic for first few pages
              startPage = 1;
              endPage = Math.min(maxVisiblePages, totalPages);
            } else {
              // Middle pages
              startPage = currentPage - 1;
              endPage = currentPage + 1;
            }

            return Array.from(
              { length: endPage - startPage + 1 },
              (_, index) => {
                const pageNumber = startPage + index;
                return (
                  <PaginationItem key={pageNumber}>
                    <PaginationLink
                      href="#"
                      isActive={currentPage === pageNumber}
                      onClick={() => handlePageChange(pageNumber, totalPages)}
                    >
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                );
              }
            );
          })()}

          {/* Ellipsis and Last Page */}
          {currentPage < totalPages - 3 && totalPages > 5 && (
            <>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  isActive={currentPage === totalPages}
                  onClick={() => handlePageChange(totalPages, totalPages)}
                >
                  {totalPages}
                </PaginationLink>
              </PaginationItem>
            </>
          )}

          {/* Next Button */}
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={() =>
                currentPage < totalPages &&
                handlePageChange(currentPage + 1, totalPages)
              }
              className={currentPage === totalPages ? "disabled" : ""}
              style={{
                cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                backgroundColor: currentPage === totalPages ? "#ccc" : "",
              }}
              disabled={currentPage === totalPages}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default GlobalPagination;
