/*
Forum CSS JS
Copyright (c) BetterGaia and Bowafishtech
Unauthorized copying, sharing, adaptation, publishing, commercial usage, and/or distribution, its derivatives and/or successors, via any medium, is strictly prohibited.
*/
var link=document.createElement("link");link.href=chrome.extension.getURL("code/css/forum.css");link.type="text/css";link.rel="stylesheet";document.documentElement.appendChild(link);
function ForumCss(){var a="";!1===prefs["forum.constrain"]&&(a+="body.forum div#content, body.forums #content #content-padding, body.app-page_forum div#content, body.forums #gaia_content.ss_2Columns_flexiLeft_wideRight > #yui-main {width: calc(100% - 25px);}");"#BF7F40"!=prefs["forum.threadHeader"]&&(a+="body.forums #gaia_content:not(.grid_billie_holiday) #forum-header .linklist, body.forums #gaia_content #forum_ft_content, body.forums #content #content-padding > .linklist, body.forums #content #content-padding > #topic_header_container .detail-navlinks {background-color: "+prefs["forum.threadHeader"]+
";} body.forums #gaia_content:not(.grid_billie_holiday) .subforums {box-shadow: 0 -3px 3px rgba(0,0,0,0.4), 0 -3px 0 "+prefs["forum.threadHeader"]+";}");!0===prefs["forum.pollHide"]&&(a+='body.forums #content #content-padding > #topic_header_container #thread_poll {height: 40px; overflow: hidden;} body.forums #content #content-padding > #topic_header_container #thread_poll:hover {height: auto; overflow: visible;} body.forums #content #content-padding > #topic_header_container #thread_poll:after {content: "\\25BC"; color: rgba(0,0,0,0.35); display: block; position: absolute; top: 9px; right: 8px; font-size: 17px; text-shadow: 0 1px 1px #FFF;} body.forums #content #content-padding > #topic_header_container #thread_poll:hover:after {color: rgba(0,0,0,0.7); content: "\\25B2";}');
"#CFE6F9"!=prefs["forum.postHeader"]&&(a+="body.forums #content #post_container .post .postcontent .user_info_wrapper, body.forums #content #post_container .post .postcontent .message .messagecontent .post-options, body.forums #content #post_container .post .postcontent .post-signature {background-color: "+prefs["forum.postHeader"]+";}");!0===prefs["forum.post.bgContainer"]&&(a+="body.forums #content #post_container .post > .postcontent {border-radius: 4px 10px 0 0; background-image: linear-gradient(to bottom, rgba(255,255,255,0.6), rgba(255,255,255,0.6)); background-color: "+
prefs["forum.postHeader"]+";} body.forums #content #post_container .post.bgpc_hidden > .postcontent {border-radius: 4px;}");!0===prefs["forum.postOffWhite"]&&(a+="body.forums #content #post_container .post .postcontent .message .messagecontent {background-color: rgba(255,255,255,0.95);} body.forums #content #post_container .post .postcontent .message .messagecontent .post-bubble div.content, body.forums #content #post_container .post .postcontent .message .messagecontent .post-bubble .avi-speech:not(.document) .avi-speech-bd {background-color: transparent;} body.forums #content #post_container .post .postcontent .message .messagecontent::before {border-right-color: rgba(255,255,255,0.95);}");
!1===prefs["forum.post.optionsBottom"]&&(a+="body.forums #content #post_container .post .postcontent .message .messagecontent {padding: 30px 0 0;} body.forums #content #post_container .post .postcontent .message .messagecontent .post-options {top: 0; bottom: auto; border-top: 0;}");var b=document.createElement("style");b.type="text/css";b.setAttribute("bg-forumcss","");b.appendChild(document.createTextNode(a));document.documentElement.appendChild(b)}
!0===prefs.appliedUserPrefs&&!1===prefs.appliedForumCss&&(ForumCss(),prefs.appliedForumCss=!0);
