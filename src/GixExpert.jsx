
import { useState } from "react";
import { AddCaterory, GifGrid } from "./components";

const api_key = '3CdsTWDwHtq82kER39xeNzMjpUGHHQT0';

export const GixExpert = () => {

    const [categorias, setCategorias] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {

        if (categorias.includes(newCategory)) return;
        setCategorias([newCategory, ...categorias]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCaterory onNewCategory={onAddCategory} />

            {
                categorias.map((category) => (
                    <GifGrid key={category}
                        category={category}
                    />
                ))
            }

        </>
    )
}



