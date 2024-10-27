
type Props = {
    name: String;
    OnClick: () => void; 
}


export default function Button({name, OnClick}: Props) {
    return (
        <div className="" >
            <button onClick={OnClick}>{name}</button>
        </div>
    )
}