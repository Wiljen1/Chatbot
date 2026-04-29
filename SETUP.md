# Setup Instructions

## 1. OpenAI API
Create API key:
https://platform.openai.com

Add as NetSuite Script Parameter:
- OPENAI_API_KEY

## 2. Datasource Mode
Set Script Parameter:
- DATASOURCE_MODE = ONEDRIVE or FILECABINET

## 3. OneDrive (optional)
Create Azure App Registration:
- Tenant ID
- Client ID
- Client Secret
- Grant: Files.Read.All (Application)

Set parameters:
- TENANT_ID
- CLIENT_ID
- CLIENT_SECRET
- ONEDRIVE_DRIVE_ID
- ONEDRIVE_FOLDER_PATH

## 4. File Cabinet (fallback)
Set parameter:
- FILECABINET_FOLDER_ID

## 5. Deploy Scripts
- Deploy Suitelet
- Deploy Portlet
- Add portlet to dashboard

## 6. Important Notes
- Portlet is only UI shell; Suitelet handles chat
- OpenAI calls are made using N/https
- File size limit for File Cabinet reads is ~10MB
