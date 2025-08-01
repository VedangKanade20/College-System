## 🪝 Lefthook – Pre-commit Hook for Formatting and Linting

This project uses Lefthook to automatically format and lint code before committing. It ensures consistent code quality across both client/ and server/ directories.

🔧 Setup Instructions
Install dependencies

If you haven't already, install lefthook, prettier, and eslint in both client and server:

```bash
# Root
npm install --save-dev lefthook
# Client
cd client
npm install --save-dev prettier eslint
# Server
cd ../server
npm install --save-dev prettier eslint
```

In the root of the project, a lefthook.yml file is already configured like this:

This configuration ensures:

Prettier formats all relevant files in both client/ and server/

ESLint fixes lint issues on JavaScript/TypeScript files

🧪 Usage
Now when you run:

```bash
git commit -m "your message"
Lefthook will:
```

Run Prettier and ESLint only on staged files

Prevent the commit if any issue fails or can't be auto-fixed

✅ Enable Format on Save in VS Code

🔧 Option 1: Enable Globally (for all projects)
Open VS Code

Go to File → Preferences → Settings
Or press: Ctrl + , (Comma)

Search for:
format on save

Check the box ✅
✔ Editor: Format On Save

🔧 Option 2: Enable Per Project (Recommended for team settings)
In your project root, open or create:

📄 .vscode/settings.json

Add this:

```bash
{
  "editor.formatOnSave": true
}
```

This makes sure auto-formatting works only for this specific project.

🧠 Optional: Specify Prettier as the Default Formatter
If you're using Prettier, make sure it’s the default:

Open Settings

Search: default formatter

Set it to: esbenp.prettier-vscode

Or in your .vscode/settings.json:

```bash
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

🔁 Make sure Prettier is installed in your project or as a VS Code extension.

✅ Install Prettier Extension (If Not Done)
Go to Extensions tab (📦 icon on left sidebar)

Search for Prettier - Code formatter

Click Install
