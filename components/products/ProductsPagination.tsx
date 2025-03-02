import Link from "next/link";
type ProductsPaginationProps = {
  page: number;
  totalPage: number;
};

const ProductsPagination = ({ page, totalPage }: ProductsPaginationProps) => {
  const pages = Array.from({ length: totalPage }, (_, i) => i + 1);

  return (
    <nav className="flex justify-center py-10 gap-2">
      {page > 1 && (
        <Link
          className="bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
          href={`/admin/products?page=${page - 1}`}
        >
          &laquo;
        </Link>
      )}

      {pages.map((currenPage) => (
        <Link
          className={`${
            page === currenPage && "font-black"
          } bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0`}
          href={`/admin/products?page=${currenPage}`}
          key={currenPage}
        >
          {currenPage}
        </Link>
      ))}

      {page < totalPage && (
        <Link
          className="bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
          href={`/admin/products?page=${page + 1}`}
        >
          &raquo;
        </Link>
      )}
    </nav>
  );
};

export default ProductsPagination;
