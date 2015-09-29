
/**
 * Created by aljonp on 9/29/15.
 * Contains functions that obtain data information from green jobs.
 */

/**
 * This function can be passed greenjobs and returns an array of strings indicating all the
 * industries in the dataset (no duplicates).
 * @param data
 * @returns (Array)
 */
function listIndustries(data) {
  return _.uniq(_.pluck(data, 'Industry'));
}


/**
 * This function can be passed greenjobs and returns an object where the keys are County names
 * and the values are the number of Green Jobs listed in that County.
 * @param data
 * @returns (Object) containing the number of Green Jobs per county
 */
function countyGreenJobs(data) {
  return _.countBy(data, function(num) {
    return num['County'];
  })
}


/**
 * This function can be passed greenjobs and a string and returns a list of Job Titles*
 * containing the passed string.
 * @param data
 * @param keyword PV
 * @returns (Array) of PV Jobs
 */
function jobswithKeyword(data, keyword){
  var jobs = _.filter(data, function(num){ return num['Job Title'].indexOf(keyword) != -1; });

  return _.pluck(jobs, 'Job Title')
}