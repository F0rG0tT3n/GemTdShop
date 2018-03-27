import sys
 
line=sys.argv[1]
title=sys.argv[2]
 
import praw
 
reddit = praw.Reddit(client_id='CLIENT_ID', client_secret="CLIENT_SECRET",
                     password='PASSWORD', user_agent='USER_AGENT',
                     username='USERNAME')
 
subreddit = reddit.subreddit("GemTD")
 
subreddit.submit(title, line)