---
sidebar_position: 1
---

# Authentication

Our API leverages **OAuth 2.0**, authorization framework, to provide highly secure and efficient access to the resources. This industry-standard protocol ensures that your interactions with our API are safeguarded. 



## Obtaining the credentials
Here’s how to get started:

- Log In to the App UI Console.
- Navigate to the API client tab.
- Click "Add Client", enter a friendly name for it and click on "Create Client".
- You will be provided with a Client ID and Client Secret. These are unique to your company and will be used to authenticate API requests.
- It's imperative to **store them securely** to prevent unauthorized access and potential security breaches

## Exchange credentials for a token
After securing your Client ID and Client Secret, the next step in utilizing our API is to exchange these credentials for an access token. The access token grants your application permission to make API requests.

#### 1. Parameters
To initiate the token exchange process, you need to send a request to our authorization server. This is done by making a POST request to the token endpoint. Ensure your request includes the following parameters:

**grant_type:** use `client_credentials`

**scope:** use `api/write`

**client_id:** Your application's `Your-Client-ID` from previous step.

**client_secret:** Your application's `Your-Client-Secret` from previous step.

**auth_url**: `https://auth-provider-dev.auth.eu-west-1.amazoncognito.com/oauth2/token`


#### 2. Make the Request
Send the request to the token endpoint. Here is a code example.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="language">
  <TabItem value="python" label="python">
  ```jsx 
import requests

client_id = 'Your-Client-ID'
client_secret = 'Your-Client-Secret'

auth_url = 'auth_url'

params = {
    'grant_type': 'client_credentials',
    'scope': 'api/write'
}

response = requests.post(auth_url, data=params, 
                  auth=(client_id, client_secret), 
                  headers={'Content-Type': 'application/x-www-form-urlencoded'}
                  )

if response.status_code == 200:
    token = response.json()['access_token']
    print("Access Token:", token)
else:
    print("Failed to obtain token, status code:", response.status_code)
    ``` 
    </TabItem>
  <TabItem value="javascript" label="javascript">
  ```jsx 
const clientId = 'Your-Client-ID';
const clientSecret = 'Your-Client-Secret';
const authUrl = 'auth_url';
const params = new URLSearchParams({
    grant_type: 'client_credentials',
    scope: 'api/write'
});
const encodedCredentials = btoa(clientId + ':' + clientSecret);
const headers = new Headers();
headers.append('Content-Type', 'application/x-www-form-urlencoded');
headers.append('Authorization', 'Basic ' + encodedCredentials);
fetch(authUrl, {
    method: 'POST',
    headers: headers,
    body: params
})
.then(response => {
    if (response.ok) {
        return response.json();
    }
    throw new Error(response.status);
})
.then(data => {
    console.log("Access Token:", data.access_token);
})
.catch(error => {
    console.log("Failed to obtain token, status code:", error.message);
});


    ``` 
  </TabItem>
</Tabs>





