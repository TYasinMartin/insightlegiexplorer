// InsightLegi Explorer settings. Edit only the three lines in quotes or true/false, then commit.

// 1. Reviewer preview: true shows a yellow "Reviewer preview" bar. Change to false on launch day.
var LSAP_REVIEW_MODE = true;

// 2. Feedback form: paste the link to your feedback form between the quote marks.
//    Leave it empty ('') and the feedback buttons will open an email to admin@insightlegi.org instead.
var LSAP_FEEDBACK_URL = '';

// 3. Usage counting (GoatCounter, no cookies, no personal data): replace YOURCODE with your GoatCounter code.
var LSAP_GOATCOUNTER_CODE = 'YOURCODE';

if (LSAP_GOATCOUNTER_CODE !== 'YOURCODE') {
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://gc.zgo.at/count.js';
  s.setAttribute('data-goatcounter', 'https://' + LSAP_GOATCOUNTER_CODE + '.goatcounter.com/count');
  document.head.appendChild(s);
}
