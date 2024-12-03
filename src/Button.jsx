export default function Button({ title, onClick }) {
    return (
        <button className="w-full bg-dark-slate-gray text-white rounded-lg py-4 font-bold hover:bg-gradient-to-r from-rose to-orange hover:shadow-button focus:outline-none focus-visible:bg-gradient-to-r focus-visible:shadow-button" onClick={onClick}>
            {title}
        </button>
    );
}