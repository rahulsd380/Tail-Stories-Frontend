import { baseApi } from "@/redux/Api/baseApi";


const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    createPost: builder.mutation({
      query: (postContent) => ({
        url: "/posts/create-post",
        method: "POST",
        body: postContent,
      }),
    }),

    getAllPosts: builder.mutation({
      query: () => ({
        method: "GET",
        url: "/posts",
      }),
      invalidatesTags : ["posts"]
    }),

    getSinglePostById: builder.mutation({
      query: (postId) => ({
        method: "GET",
        url: `/posts/${postId}`,
      }),
      invalidatesTags : ["posts"]
    }),

    updatePost: builder.mutation({
      query: ({id, updatedPostData}) => ({
        method: "PUT",
        url: `/posts/${id}`,
        body: updatedPostData,
      }),
      invalidatesTags: ["users"]
    }),


    deletePost: builder.mutation({
        query: (id) => ({
          method: "DELETE",
          url: `/posts/${id}`,
        }),
        invalidatesTags : ["posts"]
      }),
    

  }),
});

export const { useCreatePostMutation, useGetAllPostsMutation, useGetSinglePostByIdMutation, useUpdatePostMutation, useDeletePostMutation } = authApi;
