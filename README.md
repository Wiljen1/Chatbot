# NetSuite Chatbot

A NetSuite-first chatbot implementation that uses the OpenAI API (not N/llm), with an optional OneDrive datasource through Microsoft Graph and a NetSuite File Cabinet fallback.

## Included
- Dashboard portlet launcher
- Suitelet chat UI
- OpenAI API integration
- OneDrive datasource module
- File Cabinet datasource module
- Editable instructions and conversation starters

## Recommended architecture
- Use the **Portlet** as a dashboard launcher / summary surface.
- Use the **Suitelet** as the actual chat interface.
- Use **OneDrive** if Microsoft Graph app credentials are available.
- Otherwise use **NetSuite File Cabinet** as the source of truth.

## Files
- `src/FileCabinet/SuiteScripts/Chatbot/Chatbot_Portlet.js`
- `src/FileCabinet/SuiteScripts/Chatbot/Chatbot_Suitelet.js`
- `src/FileCabinet/SuiteScripts/Chatbot/lib/Config.js`
- `src/FileCabinet/SuiteScripts/Chatbot/lib/OpenAIClient.js`
- `src/FileCabinet/SuiteScripts/Chatbot/lib/DataSource_OneDrive.js`
- `src/FileCabinet/SuiteScripts/Chatbot/lib/DataSource_FileCabinet.js`
- `src/FileCabinet/SuiteScripts/Chatbot/prompts/instructions.txt`
- `src/FileCabinet/SuiteScripts/Chatbot/prompts/conversation_starters.json`
- `SETUP.md`
