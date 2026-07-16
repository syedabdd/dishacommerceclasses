"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { useSearchParams } from "next/navigation";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  baseUrl: string;
}

export default function Pagination({
  totalPages,
  currentPage,
  baseUrl,
}: PaginationProps) {
  const searchParams = useSearchParams();

  if (totalPages <= 1) return null;

  const getPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    return `${baseUrl}?${params.toString()}`;
  };

  // Generate page numbers to display
  const getVisiblePages = () => {
    const delta = 2; // How many pages to show around current page
    const range = [];
    const rangeWithDots = [];
    let l;

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        range.push(i);
      }
    }

    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push("...");
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  };

  const pages = getVisiblePages();

  return (
    <nav className="flex items-center justify-center space-x-2 mt-8">
      {/* Previous Button */}
      {currentPage > 1 ? (
        <Link
          href={getPageUrl(currentPage - 1)}
          className="p-2 rounded-md border border-gray-300 hover:bg-gray-50 text-gray-700 transition-colors"
          aria-label="Previous page"
        >
          <ChevronLeft className="w-5 h-5" />
        </Link>
      ) : (
        <button
          disabled
          className="p-2 rounded-md border border-gray-300 bg-gray-100 text-gray-400 cursor-not-allowed"
          aria-label="Previous page"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}

      {/* Page Numbers */}
      <div className="flex items-center space-x-1">
        {pages.map((page, index) => {
          if (page === "...") {
            return (
              <span
                key={`ellipsis-${index}`}
                className="w-10 h-10 flex items-center justify-center text-gray-500"
              >
                <MoreHorizontal className="w-4 h-4" />
              </span>
            );
          }

          const isCurrentPage = page === currentPage;
          return (
            <Link
              key={`page-${page}`}
              href={getPageUrl(page as number)}
              className={`w-10 h-10 flex items-center justify-center rounded-md border transition-colors ${
                isCurrentPage
                  ? "bg-blue-600 text-white border-blue-600"
                  : "border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
              aria-current={isCurrentPage ? "page" : undefined}
            >
              {page}
            </Link>
          );
        })}
      </div>

      {/* Next Button */}
      {currentPage < totalPages ? (
        <Link
          href={getPageUrl(currentPage + 1)}
          className="p-2 rounded-md border border-gray-300 hover:bg-gray-50 text-gray-700 transition-colors"
          aria-label="Next page"
        >
          <ChevronRight className="w-5 h-5" />
        </Link>
      ) : (
        <button
          disabled
          className="p-2 rounded-md border border-gray-300 bg-gray-100 text-gray-400 cursor-not-allowed"
          aria-label="Next page"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}
    </nav>
  );
}
