import win32com.client
import datetime
import requests
import json
from collections import defaultdict

def read_and_post_emails():
    outlook = win32com.client.Dispatch("Outlook.Application").GetNamespace("MAPI")
    inbox = outlook.GetDefaultFolder(6)
    today = datetime.datetime.now().date()
    emails = inbox.Items
    emails.Sort("[ReceivedTime]", True)

    categorized_emails = defaultdict(list)

    for email in emails:
        if email.ReceivedTime.date() == today:
            categorized_emails[email.SenderName].append({
                "Subject": email.Subject,
                "ReceivedTime": str(email.ReceivedTime),  # Convert to string for JSON
                "Body": email.Body
            })

    # Convert to JSON
    json_data = json.dumps(categorized_emails)

    # Endpoint
    endpoint = "https://node.cuthru.cloud/sitcom-staunch-itch"

    # Post data
    response = requests.post(endpoint, data=json_data, headers={'Content-Type': 'application/json'})

    return response

# Example usage
response = read_and_post_emails()
print("Status Code:", response.status_code)
print("Response:", response.text)
