import { useEffect, useState } from "react";

const Dropdown = ({ options, setOption }) => {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [filteredOptions, setFilteredOptions] = useState(options);
    const [selectedValue, setSelectedValue] = useState(null);

    useEffect(() => {
        setFilteredOptions(
            options.filter(option =>
                option.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, options]);

    const handleSelectOption = (option) => {
        setSelectedValue(option);
        setOption(option);
        setOpen(false);
    }

    return (
        <div className="m-10 ">

            <button
                className="border p-4 rounded-md mb-4"
                onClick={() => setOpen(!open)}>

                {selectedValue || 'انتخاب کنید'}

            </button>

            {open && (
                <div>
                    <input
                        className="border p-1 rounded-md"
                        type="text"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    {filteredOptions.map(option => (
                        <div key={option} onClick={() => handleSelectOption(option)}>
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Dropdown