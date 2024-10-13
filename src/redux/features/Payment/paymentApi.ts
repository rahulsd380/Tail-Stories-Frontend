import { baseApi } from "@/redux/Api/baseApi";


const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    makePayment: builder.mutation({
      query: (paymentData) => ({
        url: "/payment/create-payment",
        method: "POST",
        body: paymentData,
      }),
      invalidatesTags: ["payments"]
    }),

    getAllPaymentsHistory: builder.query({
      query: () => ({
        method: "GET",
        url: "/posts",
      }),
      providesTags : ["posts"]
    }),
    

  }),
});

export const {useGetAllPaymentsHistoryQuery, useMakePaymentMutation } = paymentApi;
