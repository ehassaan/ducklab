
# %%

from IPython import display
import json

issues = [{
        "url": "https://github.com/project/repo/issue/123",
        "title": "Bug A",
        "body": "Bug A description..."
    },
    {
        "url": "https://github.com/project/repo/issue/456",
        "title": "Bug B",
        "body": "Bug B description..."
    }]

display.display({
    "x-application/github-issues": json.dumps(issues),
    "application/json": json.dumps(issues, indent=2),
    "text/html": "<h1>[html] " + ", ".join([i["title"] for i in issues]) + "</h1>",
    "text/plain": "[plain] " + ", ".join([i["url"] for i in issues]),
}, raw=True)
