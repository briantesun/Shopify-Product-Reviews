import { Select } from "@shopify/polaris";

import { useCallback, useState } from "react";

function SortByButton() {
  const [selected, setSelected] = useState("newestUpdate");

  const handleSelectChange = useCallback((value) => setSelected(value), []);

  const options = [
    { label: "Newest", value: "newest" },
    { label: "Oldest", value: "oldest" },
    { label: "Highest rating", value: "highestRating" },
    { label: "Lowest rating", value: "lowestRating" },
  ];

  return (
    <Select
      label="Sort by"
      labelInline
      options={options}
      onChange={handleSelectChange}
      value={selected}
    />
  );
}

export default SortByButton;
