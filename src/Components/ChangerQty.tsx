import {Props} from "@/types.ts";
import useStore from "@/store/store.ts";
import {useShallow} from "zustand/react/shallow";
import {Button} from "@/Components/ui/button.tsx";
import {Minus, Plus} from "lucide-react";
import {useEffect} from "react";

export default function ChangerQty({productId}: Props) {
    const {getProductById, decQty, incQty, setTotal} = useStore(useShallow((state) =>
        ({
            getProductById: state.getProductById,
            decQty: state.decQty, incQty: state.incQty, setTotal: state.setTotal
        })))
    const product = getProductById(productId);
    useEffect(() => {
        const unSub = useStore.subscribe((state) => state.products, (products) => {
            setTotal(products.reduce((acc,
            product) => acc + product.price * product.qty, 0))
        }, {fireImmediately: true});
        return unSub;
    }, [setTotal])
    return (
        <>
            {product && (
                <div className="flex gap-2 items-center">
                    <Button onClick={() => decQty(product.id)} size="icon"><Minus/></Button>
                    <p>{product.qty}</p>
                    <Button onClick={() => incQty(product.id)} size="icon"><Plus/></Button>
                </div>

            )
            }
        </>
    )
}