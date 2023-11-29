import { apiSlice } from "../api/apiSlice";

export const eventApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllEvents: builder.query({
      query: ({ search, startDate, endDate, page }) => ({
        url: `/event?page=${page}&search=${search}&startDate=${startDate}&endDate=${endDate}`,
      }),
      providesTags: ["Event"],
    }),

    getEventDetails: builder.query({
      query: (id) => ({
        url: `/event/${id}`,
      }),
    }),

    createEvent: builder.mutation({
      query: (data) => ({
        url: "/event/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Event"],
    }),

    editEvent: builder.mutation({
      query: ({ data, id }) => {
        console.log(data, id);
        return {
          url: `/event/update/${id}`,
          method: "PATCH",
          body: data,
        };
      },
      providesTags: ["Event"],
    })
  }),
});

export const {
  useCreateEventMutation,
  useEditEventMutation,
  useGetAllEventsQuery,
  useGetEventDetailsQuery
} = eventApi;
