# Overview

Provides three functions computing analystics over the [Green Jobs Dataset](https://data.hawaii.gov/Employment/Hawaii-Directory-Of-Green-Employers/mq86-5ta6).

# Installation

Provide the following scripts in your HTML file:
```
<script src="//philipmjohnson.github.io/ics314f15/morea/underscore/underscore-min.js"></script>
<script src="//philipmjohnson.github.io/ics314f15/morea/underscore/greenjobs.js"></script>
<script src="greenjobs.js"></script>
```

# Usage

Here are example calls to the analytic functions:
```
<script>
  console.log(listIndustries(greenjobs));
  console.log(countyGreenJobs(greenjobs));
  console.log(jobswithKeyword(greenjobs, 'PV'));
</script>
```

Consult the greenjobs.js file for more details on these functions.

# Credits

Uses the [Underscore](http://underscorejs.org) Library.