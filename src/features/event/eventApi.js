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
      query: ({ inputData, id }) => {
        return {
          url: `/event/update/${id}`,
          method: "PATCH",
          body: inputData,
        };
      },
      providesTags: ["Event"],
    }),

    updateRsvp: builder.mutation({
      query: ({ inputData, id }) => {
        return {
          url: `/event/update-rsvp/${id}`,
          method: "PUT",
          body: inputData,
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
  useGetEventDetailsQuery,
  useUpdateRsvpMutation
} = eventApi;
