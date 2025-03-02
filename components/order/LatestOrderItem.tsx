import { OrderWithProducts } from "@/src/types";

type LatestOrderItemProps = {
  order: OrderWithProducts;
};

const LatestOrderItem = ({ order }: LatestOrderItemProps) => {
  return (
    <div className="bg-white shadow p-5 space-y-5 rounded-lg">
      <p className="text-2xl font-bold text-slate-600">Cliente: {order.name}</p>
      <u
        className="divide-y decoration-transparent divide-gray-200 border-t border-gray-200 text-ms font-medium text-gray-500"
        role="list"
      >
        {order.orderProducts.map((product) => (
          <li className="flex py-6 text-lg" key={product.id}>
            <span className="font-bold">({product.quantity})</span>{" "}
            {product.product.name}
          </li>
        ))}
      </u>
    </div>
  );
};

export default LatestOrderItem;
