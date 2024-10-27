

type Props = {
    label: String;
    value: String;
}

export default function InfoItem({label, value}: Props) {
   

    return (
        <div>
            <h2>{label}</h2>
            <p>{value}</p>
        </div>

    )
}