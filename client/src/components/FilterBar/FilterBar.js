import { useState } from "react";

const FilterBar = ({
    genders,
    onNameFilter,
    onLocateFilter,
    onGenderFilter,
    onDateFilter,
  }) => {
    const [filters, setFilters] = useState({
      name: "",
      locate: "",
      from: "",
      to: "",
    });

    const handleInput = (field) => (event) => {
        const { value } = event.target;
    
        setFilters({
          ...filters,
          [field]: value,
        });
    
        switch (field) {
          case "name":
            onNameFilter(value);
            break;
          case "locate":
            onLocateFilter(value);
            break;
          case "from":
            onDateFilter(value, "from");
            break;
          case "to":
            break;
          default:
            break;
        }
      };

      return (
          <div><div className='HeadSearch1'>ค้นหา</div>
          <div className="searh">
            <input
                type="text"
                className="form-control"
                id="name"
                value={filters.name}
                onChange={handleInput("name")}
             />
             <input
                type="text"
                className="form-control"
                id="locate"
                value={filters.locate}
                onChange={handleInput("locate")}
             />
            <div className="search4">วันที่
            <input
              type="date"
              className="form-control"
              id="startDate"
              onChange={handleInput("from")}
            /> 
            <input
              type="date"
              className="form-control"
              id="endDate"
              onChange={handleInput("to")}
            />
            
            </div></div></div>
      )
    };
    
    export default FilterBar;