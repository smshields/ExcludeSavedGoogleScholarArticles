# ExcludeSavedGoogleScholarArticles
A script that allows one to automatically filter out Google Scholar Results that you have already saved to your reading list or another collection. 

# Description
This script is used to help eliminate publications you've already read/marked to read while you are using google scholar. This helps to speed up searches for new work in your field, especially as it relates to literature reviews or seeing the latest research on a topic without getting publications you've already seen.

To make use of this script, you must "save" any article you do not wish to see in your search results in the future; either to your reading list or a custom collection using scholar's "save" button (located at the bottom of each publication in the search results). 

When active, this script will remove all HTML and CSS related to any publication you now have saved in your collections, reducing the amount of results you have to parse through.

# Usage

You can run this script after page load. This script is built for use with Tampermonkey (https://www.tampermonkey.net) by Jan Biniok, which allows you to automatically run the script whenever you go to a google scholar domain and toggle on/off as needed. Minor modifications will allow you to run it with the tool of your choice or manually.

# Acknowledgments

This script was written in part using Google Gemini as a tool. The current version was written in January 2025, and changes to HTML or CSS that Google Scholar will break the script. If this happens, feel free to post an issue and I'll update it accordingly.
