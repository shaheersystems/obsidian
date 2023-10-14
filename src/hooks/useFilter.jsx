import { useMemo } from "react";

export const useFilter = (data, filter, query) => {
  console.log(data);
  const filterate = useMemo(() => {
    if (query === "") return data; // Return the original data if the query is empty

    const lowerCaseQuery = query.toLowerCase();
    return data.filter((item) => {
      console.log(item[filter.key]);

      return String(item[filter.key]).toLowerCase().includes(lowerCaseQuery);
    });
  }, [data, filter.key, query]);

  return { filterate };
};
