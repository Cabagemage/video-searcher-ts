import type {FC} from "react";


type CardProps = {
summary: number;
ranking: number;
anotherWins: string;
image: string;
}

const Card:FC<CardProps> = ({anotherWins,  ranking, summary, image}: CardProps) => {
return (
    <div className="card">
        <img src={"https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"} />
        <p>Hello, this is card</p>
    </div>
)
}

export default Card