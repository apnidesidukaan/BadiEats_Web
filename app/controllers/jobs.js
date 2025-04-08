import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getJobsPostings } from "../api/jobs";
//==================================================================
export const useFetchJobs = () => {
  const queryClient = useQueryClient();

  const { data, } = useQuery({
    queryKey: ["jobs"],
    queryFn: getJobsPostings,
    staleTime: 5 * 60 * 1000, // 5 minutes before refetching automatically
    cacheTime: 10 * 60 * 1000, // 10 minutes before garbage collection
    select: (data) => data?.data?.data || [], // Extract only vendor data
  });

  const refetchJobs = () => {
    queryClient.invalidateQueries(["jobs"]);
  };
  //==================================================================
  return {
    jobs: data, // Vendors already transformed in `select`
    refetchJobs,
    
    
  };
};

//==================================================================


