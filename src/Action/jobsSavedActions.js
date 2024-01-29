export const jobsSavedAction = (job) => {
    return {
        type: "ADD_JOB",
        payload: job
      };
}

export const removejobsSavedAction = (job) => {
    return {
        type: "REMOVE_JOB",
        payload: job
      };
}