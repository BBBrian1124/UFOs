# UFOs

# Overview of Project: Explain the purpose of this analysis.
* We have developed a webpage with dynamic tables that accepts user inputs and allows us to filter our dataset based on the user's inputs. Filters can be applied on the date, city, state, country, and shape. By default, the webpage loads in with no filters applied along with demo place holder texts to show the user the correct formatting to enter the filters.

# Results: Describe how someone might use the new webpage by walking them through the process of using the search criteria.
![Demo Image] https://github.com/BBBrian1124/UFOs/blob/main/Challenge/Static/Images/Demo.PNG
* In order to use the search filters, the user can type what they want to 'filter by' in the text boxes under the "Filter Search" section
* There is a sample search shown in each of the text boxes to illustrate what a "good" filter looks like
* Please note that the filter is searching for singular exact matches on each/all of the filterable fields
* This means that while you can apply a filter on multiple fields (i.e. date and state), you cannot apply multiple filters on one field (i.e. selecting multiple dates). 
* It searches for EXACT matches, so the filter that is typed must match exactly the value in the dataset (i.e. state = CA will not return state = ca).
* It applies "AND" logic across the filters, meaning it searches the database based on all the filters entered (i.e. date = 1/1/2010 AND state = ca AND...)
* Once the value/filter is typed in the text box and the user exits out of the text box (i.e. by pressing enter or clicking somewhere else on the page) the filter will be automatically applied and the table will be updated to reflect the filtered data
* Filters can be removed by clearing out/deleting the values in the text box or refreshing the webpage


# Summary: In a summary statement, describe one drawback of this new design and two recommendations for further development.
## Drawbacks/Limitations:
* Exact search only: this only has the capability to search EXACT matches (i.e. state = CA and state = ca are not the same)
* One filter per field: each filterable field can only filtered on one value (i.e. cannot do state = ca or state = ar in the same filter)
* AND logic only: similarly, the filter only considers AND logic (i.e. state = ca AND shape = oval) there is no capability for OR logic (i.e. i.e. state = ca OR shape = oval)
## Recommendations:
* Add additional filter logic: there can be other filtering logic that can be applied/added as well such as where the data "contains", "start with", or other logic which can help with more advanced filtering. This would be helpful in date filtering, so that the dates can be filtered into more details (i.e. by day, month or year, rather than day month and year)
* Add OR logic: the limitations can be addressed by adding more advanced filtering functionality. The ability to search using OR logic both on each individual field (i.e. state = ca or ar) and/or on multiple fields (i.e. state = ca or shape = oval) will add more filtering capability

# Appendix 
[Repository Link] https://github.com/BBBrian1124/UFOs/tree/main/Challenge
