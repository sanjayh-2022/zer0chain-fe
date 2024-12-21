# Zer0 Chain Wallet

## Introduction

**Zer0chain Wallet** is an account-abstracted and chain-abstracted wallet designed to simplify Web3 onboarding and transaction management. With AI-powered workflows and a WhatsApp-based interface, it offers an intuitive, text or voice-driven way to manage your wallet, making crypto transactions as easy as sending a message.

The wallet uses **Anon Aadhaar**, a privacy-focused ZK protocol for user verification before wallet creation, ensuring secure and anonymous identity validation. For high-cost transactions, Zer0chain Wallet leverages LIT Protocol, which adds an extra layer of security, safeguarding transactions and reducing the risk of fraud.

**Demo Video Link**: [youtu.be/QyDWfzndVOE?si=RAebxxpnQkc_QhFx](https://youtu.be/QyDWfzndVOE?si=RAebxxpnQkc_QhFx)

## Key Features  

- 🔑 **Account Abstraction**: No need to worry about private keys or seed phrases; enjoy a seamless wallet experience.  
- 🌐 **Chain Abstraction**: Effortlessly interact with multiple networks in one place.  
- 🧠 **Crypto x AI**: : Leverage cutting-edge Gen AI agent workflows to automate transactions, integrated seamlessly with a WhatsApp bot.
- 💬 **WhatsApp Bot**: Interact with your wallet directly via WhatsApp, making transactions as simple as typing a message or recording your Voice.  
- 🔒 **Anon Aadhaar**: Securely verify your identity using a zk-protocol-based approach to Aadhaar verification, ensuring privacy and security.  


## Getting Started  

### Prerequisites  

Ensure you have the following installed:  
- **Node.js** (v16 or later)  
- **npm** & **yarn**
- **Python** (3.9 or later)  

### Installation  

Clone the repository:

```bash
git clone --recurse-submodules https://github.com/sanjayh-2022/zer0chain-fe.git
```

Navigate to the project directory:

```bash
cd zer0chain-fe
```

#### Setup the Frontend
Install dependencies:

```bash
yarn install
```

#### Setup the AI Agent

Navigate to the directory

```bash
cd zer0_chain-server/src/agent
```

Create a virtual environment:

```bash
python3 -m venv venv
```

Activate the virtual environment:

- On **Windows**:

  ```bash
  .\venv\Scripts\activate
  ```

- On **MacOS/Linux**:

  ```bash
  source venv/bin/activate
  ```


#### Setup the server

```
cd zer0_chain-server
npm i
```

#### Environment Setup

Create a .env file in the root directory and configure the following variables:

```
TWILIO_ACCOUNT_SID=<your_twilio_account_sid>
TWILIO_AUTH_TOKEN=<your_twilio_auth_token>
GROQ_API_KEY=<your_groq_api_key>
HF_API_KEY=<your_hugging_face_api_key>
GOOGLE_API_KEY2=<your_google_gemini_api_key>
```

#### Run the Application

Start the development server:

```bash
cd zer0_chain-server
npm start
```

Start the Python AI Agent Workflow:

```bash
python3 src/agent/agent.py
```

Start the development server for UI (in the root directory):

```bash
yarn start
```

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or clone the repository and submit a pull request on GitHub.
