import { useState } from "react";
import icons from "../../assets/Icons";
import { SelectFilter } from "./SelectFilter";

const Filter = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectId, setSelectId] = useState(null);
  const [showMore, setShowMore] = useState({});
  const [searchItem, setSearchItem] = useState("");
  const [filters, setFilters] = useState([]);

  const optionsWhere = [
    { id: 1, value: "تاریخ" },
    { id: 2, value: "تگ" },
    { id: 3, value: "اعضا" },
    { id: 4, value: "اولویت" },
  ];
  const optionsTag = [
    { id: 1, value: "درس", background: " #EBC8C8" },
    { id: 2, value: "کار", background: "#C3B7F2" },
    { id: 3, value: "پروژه", background: "#7FFAFA" },
  ];
  const optionsIsOrNot = [
    { id: 1, value: "است" },
    { id: 2, value: "نیست" },
  ];

  const handleClose = () => {
    setIsOpen(false);
  };

  const clickAddHandler = (id) => {
    // console.log(id);
    // setSelectId(id);
    // setShowMore((prevShowMore) => ({
    //   ...prevShowMore,
    //   [id]: !prevShowMore[id],
    // }));
    // console.log(showMore);

  };

  const handleSearchChange = (event) => {
    setSearchItem(event.target.value);
  };

  const filterOptions = (options) => {
    if (searchItem.trim() === "") {
      return options;
    }
    return options.filter((option) =>
      option.value.includes(searchItem.trim().toLocaleLowerCase())
    );
  };

  const handleRemoveFilter = (filterId) => {
    setFilters((prevFilters) =>
      prevFilters.filter((filter) => filter.id !== filterId)
    );
  };

  const handleAddNewFilters = () => {
    setFilters((prevFilters) => [
      ...prevFilters,
      {
        id: prevFilters.length + 1,
        selectedOptionWhere: "",
        selectedOptionTag: "",
        selectedOptionIsOrNot: "",
      },
    ]);

  };

  const handleSelectedOptionWhereChange = (filterId, selectedOption) => {
    setFilters((prevFilters) =>
      prevFilters.map((filter) =>
        filter.id === filterId
          ? { ...filter, selectedOptionWhere: selectedOption }
          : filter
      )
    );
  };

  const handleSelectedOptionTagChange = (filterId, selectedOption) => {
    setFilters((prevFilters) =>
      prevFilters.map((filter) =>
        filter.id === filterId
          ? { ...filter, selectedOptionTag: selectedOption }
          : filter
      )
    );
  };

  const handleSelectedOptionIsOrNotChange = (filterId, selectedOption) => {
    setFilters((prevFilters) =>
      prevFilters.map((filter) =>
        filter.id === filterId
          ? { ...filter, selectedOptionIsOrNot: selectedOption }
          : filter
      )
    );
  };

  return (
    isOpen && (
      <div className="flex flex-col gap-[14px] pt-[15px] py-8 px-[21px] w-[718px] min-h-[206px] h-full rounded-lg bg-white shadow-[0_8px_12px_0_rgba(0,0,0,0.2)]">
        <div className="flex justify-between mb-[3px]">
          <span className="text-2xl text-[#000000] font-semibold">فیلتر</span>
          <i onClick={handleClose}>{icons.CloseIcon}</i>
        </div>
        {filters.map((filter, index) => {
          return (
            <div key={filter.id} className="flex justify-between">
              <div className="flex  items-center  gap-[10px]">
                <span className="text-[#000000] text-sm">تسک هایی که</span>
                <SelectFilter
                  clickAddHandler={() => clickAddHandler(index)}
                  showMore={showMore[index]}
                  option={filterOptions(optionsWhere)}
                  classNameCard={"w-[182px] "}
                  searchValue={searchItem}
                  onSearchChange={handleSearchChange}
                  selectedOption={filter.selectedOptionWhere}
                  setSelectedOption={(selectedOption) =>
                    handleSelectedOptionWhereChange(filter.id, selectedOption)
                  }
                  setShowMore={(value) =>
                    setShowMore((prevShowMore) => ({
                      ...prevShowMore,
                      [filter.id]: value,
                    }))
                  }
                />
                <span className="text-[#000000] text-sm">آن ها</span>
                <SelectFilter
                  clickAddHandler={() => clickAddHandler(index + 1)}
                  showMore={showMore[index + 1]}
                  option={filterOptions(optionsTag)}
                  classNameCard={"w-[146px] "}
                  searchValue={searchItem}
                  onSearchChange={handleSearchChange}
                  selectedOption={filter.selectedOptionTag}
                  setSelectedOption={(selectedOption) =>
                    handleSelectedOptionTagChange(filter.id, selectedOption)
                  }
                  setShowMore={(value) =>
                    setShowMore((prevShowMore) => ({
                      ...prevShowMore,
                      [filter.id]: value,
                    }))
                  }
                />
                <SelectFilter
                  clickAddHandler={() => clickAddHandler(index + 2)}
                  showMore={showMore[index + 2]}
                  option={filterOptions(optionsIsOrNot)}
                  classNameCard={"w-[107px] "}
                  isOrNot={true}
                  selectedOption={filter.selectedOptionIsOrNot}
                  setSelectedOption={(selectedOption) =>
                    handleSelectedOptionIsOrNotChange(filter.id, selectedOption)
                  }
                  setShowMore={(value) =>
                    setShowMore((prevShowMore) => ({
                      ...prevShowMore,
                      [filter.id]: value,
                    }))
                  }
                />
              </div>
              <button onClick={() => handleRemoveFilter(filter.id)}>
                {icons.BlackTrashIcon}
              </button>
            </div>
          )
        }
        )}


        <span
          onClick={handleAddNewFilters}
          className="text-xs text-[#208D8E] font-semibold cursor-pointer"
        >
          افزودن فیلتر جدید
        </span>
      </div>
    )
  );
};

export default Filter;
