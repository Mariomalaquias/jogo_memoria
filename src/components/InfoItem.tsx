

type Props = {
    label: string;
    value: string;
}

export default function InfoItem({label, value}: Props) {
   

    return (
        <div className="text-white text-center text-3xl font-bold">
            <h2>{label}</h2>
            <p>{value}</p>
        </div>

    )
}