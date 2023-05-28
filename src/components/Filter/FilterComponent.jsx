import { useState } from 'react';
import Dropdown from './Dropdown';

const FilterComponent = () => {
    const [filters, setFilters] = useState([]);
    const dropdownOptions = ['Option 1', 'Option 2', 'Option 3'];

    const addFilter = () => {
        setFilters([...filters, { option: '' }]);
    };

    const setFilterOption = (index, option) => {
        const newFilters = [...filters];
        newFilters[index].option = option;
        setFilters(newFilters);
    };

    return (
        <div>
            <div className='m-10'>
                <div className="flex justify-between ">
                    <span className="text-2xl text-[#000000] font-semibold">فیلتر</span>
                </div>
                <button
                    className="mt-8 text-xs text-[#208D8E] font-semibold cursor-pointer"
                    onClick={addFilter}
                >
                    افزودن فیلتر جدید

                </button>
            </div>
            <div className='grid grid-cols-6'>
                {filters.map((filter, index) => (
                    <Dropdown
                        key={index}
                        options={dropdownOptions}
                        setOption={option => setFilterOption(index, option)}
                    />
                ))}
            </div>
        </div>
    );
};

export default FilterComponent;

