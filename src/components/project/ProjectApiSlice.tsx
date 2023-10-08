import { apiSlice } from "../../api/apiSlice";

export const projectApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createProjects : builder.mutation({
            query : (data) => ({
                url : '/api/projects/',
                method : 'POST',
                body : {...data}
            })
        }),
        getProjects : builder.query({
            query : () => ({
                url : '/api/projects/home/',
                method : 'GET'
            }),
            providesTags : ['projects']
        }),
        getProjectbyId : builder.query({
            query : (id) => ({
                url : `/api/projects/${id}/`,
                method : 'GET'
            }),
        }),
    
    })
})

export const { useCreateProjectsMutation , useGetProjectsQuery , useGetProjectbyIdQuery } = projectApi;