export const jobsSavedAction = (jobId) => {
    return {
        type: "ADD_JOB",
        payload: jobId
      };
}

export const removejobsSavedAction = (jobId) => {
    return {
        type: "REMOVE_JOB",
        payload: jobId
      };
}