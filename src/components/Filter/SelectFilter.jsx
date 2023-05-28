import icons from "../../assets/Icons";

export const SelectFilter = ({
  clickAddHandler,
  showMore,
  option,
  className,
  classNameCard,
  searchValue,
  onSearchChange,
  isOrNot,
  setSelectedOption,
  selectedOption,
  setShowMore,
}) => {
  // console.log(setSelectedOption);
  const handleSelectOption = (option) => {
    setSelectedOption(option.value);
    setShowMore(false);
    // console.log(`id: ${option.value}`);
  };
  return (
    <div className="relative">
      <div
        className={`cursor-pointer flex  items-center justify-between  text-sm text-[#1e1e1e1] border border-[E9EBF0] rounded-md py-1 px-2 ${classNameCard}`}
        onClick={clickAddHandler}
      >
        {selectedOption || "انتخاب کنید"}
        <i>{icons.ArrowDownIcon}</i>
      </div>
      {showMore && (
        <div
          className={`absolute top-[calc(_100%+_0.5rem)] gap-[11px]  z-10 bg-white right-0 flex flex-col w-full h-auto rounded-lg shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] ${className}`}
        >
          {!isOrNot && (
            <form>
              <div className="relative">
                <label
                  htmlFor="search"
                  className="absolute inset-y-0 right-2 flex items-center "
                >
                  <i>{icons.SearchIcon}</i>
                </label>
                <input
                  id="search"
                  className="w-full py-2.5 px-8 border-b border-[#E8EAED] text-[10px] text-[#959595]  rounded-tr-lg  rounded-tl-lg"
                  type="text"
                  placeholder="جستجو بین فیلتر‌ها"
                  value={searchValue}
                  onChange={onSearchChange}
                  required
                />
              </div>
            </form>
          )}
          <div className="pb-2 px-2 flex flex-col  gap-[14px] ">
            {option.map((option) => (
              <div
                key={option.id}
                value={option.value}
                onClick={() => handleSelectOption(option)}
              >
                <span
                  className="px-2 py-1.5 rounded-md cursor-pointer text-xs text-[#2B2E33] font-medium"
                  style={{ backgroundColor: option.background }}
                >
                  {option.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
