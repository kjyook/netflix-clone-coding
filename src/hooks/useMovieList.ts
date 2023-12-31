import useSWR from "swr";
import fetcher from "@/libs/fetcher";

const useMovieList = () => {
    const { data, error, isLoading } = useSWR("/api/movies", fetcher, {
        revalidateOnFocus: false,
        revalidateIfStale: false,
        revalidateOnReconnect: false,
    });

    return {
        data,
        error,
        isLoading
    }
};

export default useMovieList;