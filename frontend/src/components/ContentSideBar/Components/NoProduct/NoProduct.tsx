import Button from "@/components/Button/Button";
import styles from "./style.module.scss";
export default function noProduct({type}: {type: string}) {
    const {noProduct} = styles;
    return (
        <>
            <p className={noProduct}>No products in the {type}.</p>
            <Button content="Return to shop" isSmall={true} isPrimary={false} />
        </>
    );
}
