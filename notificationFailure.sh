#!/bin/bash

curl -H 'Content-Type: application/json' -d '{"text": "# ❌  **<PROJECT_PATH> - Failed**\r- Pipeline [#<PIPE_ID>](<PIPE_URL>)\r- Branch [<BRANCH_NAME>](<PROJECT_URL>/commits/<COMMIT_REF_NAME>) \r- Project [<PROJECT_NAME>](<PROJECT_URL>) \r- User <USER_LOGIN> - <USER_EMAIL>"}' <WEBHOOK>
