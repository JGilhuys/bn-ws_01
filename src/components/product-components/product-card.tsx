const products = ["Mede", "T-shirt"];

export default function ProductCard(props: {title: string, description: string}) {
    
    return (
        <li className="p-4 bg-white border rounded-lg">
            <p>{props.title}</p>
            <p>{props.description}</p>
        </li>
    );
}