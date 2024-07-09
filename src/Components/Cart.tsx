import { Popover, PopoverContent, PopoverTrigger } from "@/Components/ui/popover.tsx";
import { Button } from "@/Components/ui/button.tsx";
import { CircleX, ShoppingCart } from "lucide-react";
import useStore from "@/store/store.ts";
import { useShallow } from "zustand/react/shallow";
import Products from './Products';
import { Store } from "@/types";
import {Link} from "react-router-dom";

export function Cart() {
    const { reset, products, removeProduct, total } = useStore(
        useShallow((state: Store) => ({
            reset: state.reset,
            products: state.products,
            removeProduct: state.removeProduct,
            total: state.total,
        }))
    );

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="secondary" size="icon">
                    <ShoppingCart />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="overflow-y-scroll space-y-2 w-96">
                <div className="flex gap-2 text-lg items-center">
                    <h1>Корзина :</h1>
                    <Button onClick={reset} variant="destructive" size="icon">
                        <CircleX />
                    </Button>
                </div>
                <Products products={products} removeProduct={removeProduct} />
                <p>Всего: {total} BYN</p>
                <Button>
                    <Link to="/delivery">Оформить заказ</Link>
                </Button>
            </PopoverContent>
        </Popover>
    );
}
