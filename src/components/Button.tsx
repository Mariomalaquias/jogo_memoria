
type Props = {
    name: String;
    OnClick: () => void; 
}


export default function Button({name, OnClick}: Props) {
    return (
        <div className="text-black text-center text-3xl font-bold " >
            <button className="border-2 rounded-lg p-2 bg-amber-400 border-black" onClick={OnClick}>{name}</button>
        </div>
    )
}