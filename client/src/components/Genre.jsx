const Genre = ({ name, color }) => {
    return (
        <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[auto] h-[2rem]">
            <p>{name}</p>
        </div>
    );
};

export default Genre;
