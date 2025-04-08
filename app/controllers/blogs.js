import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBlogs, getBlogById } from "../api/blogs";
//==================================================================
export const useFetchBlogs = () => {
  const queryClient = useQueryClient();

  const { data, error: blogsError, isLoading: blogsIsLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
    staleTime: 5 * 60 * 1000, // 5 minutes before refetching automatically
    cacheTime: 10 * 60 * 1000, // 10 minutes before garbage collection
    select: (data) => data?.data?.data || [], // Extract only vendor data
  });

  const refetchBlogs = () => {
    queryClient.invalidateQueries(["vendors"]);
  };
  //==================================================================
  return {
    blogs: data, 
    refetchBlogs,
    blogsIsLoading,
    blogsError,
  };
};
//==================================================================

export const useFetchBlogsById = (id) => {
  const queryClient = useQueryClient();

  const { data, error: blogsError, isLoading: blogsIsLoading } = useQuery({
    queryKey: ["getBlogById", id],
    queryFn:()=> getBlogById(id),
    staleTime: 5 * 60 * 1000, // 5 minutes before refetching automatically
    cacheTime: 10 * 60 * 1000, // 10 minutes before garbage collection
    select: (data) => data?.data?.data || [], // Extract only vendor data
  });


  const refetchBlogs = () => {
    queryClient.invalidateQueries(["vendors"]);
  };
  //==================================================================
  return {
    blog: data, // Vendors already transformed in `select`
    refetchBlogs,
    blogsIsLoading,
    blogsError,
  };
};
//==================================================================


