import useSWR from "swr";
// fetcher 
import { fetcher } from "../utils/fetcher";

export function useFiles(filter) {
    const { data, error } = useSWR(
        filter.length > 7
          ? `files/data?fileName=` + filter
          : `files/data?fileName=`,
        fetcher
      );
    return {
      tableItems: data,
      isLoading: !error && !data,
      isError: error
    }
  }