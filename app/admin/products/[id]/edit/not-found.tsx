import Heading from "@/components/ui/Heading";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="text-center">
      <Heading>Producto No Encontrado</Heading>
      <Link
        href={"/admin/products"}
        className="bg-amber-400 text-black px-10 py-3 text-center font-bold cursor-pointer w-full lg:w-auto"
      >
        Ir a PRoductos
      </Link>
    </div>
  );
};

export default NotFound;
